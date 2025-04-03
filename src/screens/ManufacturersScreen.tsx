import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useManufacturers } from '../hooks/useManufacturers';
import { SearchBar } from '../components/SearchBar';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { trackEvent, ANALYTICS_EVENTS } from '../lib/analytics';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export const ManufacturersScreen: React.FC = () => {
  const { manufacturers, loading, error } = useManufacturers();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, { page: 'manufacturers' });
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value) {
      trackEvent(ANALYTICS_EVENTS.SEARCH, {
        search_term: value,
        page: 'manufacturers',
      });
    }
  };

  const handleManufacturerSelect = (manufacturer: { name: string; model: string }) => {
    trackEvent(ANALYTICS_EVENTS.SELECT_MANUFACTURER, {
      manufacturer_name: manufacturer.name,
      manufacturer_model: manufacturer.model,
    });
    navigate(`/devices/${manufacturer.model}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const filteredManufacturers = manufacturers.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto px-4">
      <SEO 
        title={t('manufacturers.title')}
        description={t('manufacturers.subtitle')}
      />
      <div className="space-y-6">
        <SearchBar 
          value={search}
          onChange={handleSearch}
          placeholder={t('manufacturers.search')}
        />

        <div className="grid grid-cols-2 gap-3">
          {filteredManufacturers.map((manufacturer) => (
            <div
              key={manufacturer.model}
              onClick={() => handleManufacturerSelect(manufacturer)}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <h2 className="text-base font-semibold text-center text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {manufacturer.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};