import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDevices } from '../hooks/useDevices';
import { SearchBar } from '../components/SearchBar';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { trackEvent, ANALYTICS_EVENTS } from '../lib/analytics';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export const DevicesScreen: React.FC = () => {
  const { manufacturerModel } = useParams<{ manufacturerModel: string }>();
  const { devices, loading, error } = useDevices(manufacturerModel || '');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, { 
      page: 'devices',
      manufacturer_model: manufacturerModel,
    });
  }, [manufacturerModel]);

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value) {
      trackEvent(ANALYTICS_EVENTS.SEARCH, {
        search_term: value,
        page: 'devices',
        manufacturer_model: manufacturerModel,
      });
    }
  };

  const handleDeviceSelect = (device: { manufacturer: string; name: string }) => {
    trackEvent(ANALYTICS_EVENTS.SELECT_DEVICE, {
      manufacturer: device.manufacturer,
      device_name: device.name,
    });
    navigate(`/sensitivities/${manufacturerModel}/${device.name}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const filteredDevices = devices.filter(device => 
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto px-4 opacity-100 transition-opacity duration-300 ease-in-out">
      <SEO 
        title={t('devices.title', { manufacturer: manufacturerModel })}
        description={t('devices.subtitle', { manufacturer: manufacturerModel })}
      />
      <div className="space-y-6">
        <SearchBar 
          value={search}
          onChange={handleSearch}
          placeholder={t('devices.search')}
        />

        <div className="grid grid-cols-2 gap-3">
          {filteredDevices.map((device) => (
            <div
              key={device.name}
              onClick={() => handleDeviceSelect(device)}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="text-center">
                <span className="text-base font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {device.manufacturer} {device.name}
                </span>
              </div>
              {device.settings_source_url && (
                <div className="mt-2 text-center">
                  <a
                    href={device.settings_source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      trackEvent(ANALYTICS_EVENTS.SOCIAL_LINK_CLICK, {
                        link_type: 'settings_source',
                        url: device.settings_source_url,
                      });
                    }}
                    className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    {t('devices.source')}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};