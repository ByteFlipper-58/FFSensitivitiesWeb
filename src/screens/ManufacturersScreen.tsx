import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useManufacturers } from '../hooks/useManufacturers';
import { SearchBar } from '../components/SearchBar';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const ManufacturersScreen: React.FC = () => {
  const { manufacturers, loading, error } = useManufacturers();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const filteredManufacturers = manufacturers.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          FF Sensitivities
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Select your device manufacturer
        </p>
        
        <SearchBar 
          value={search}
          onChange={setSearch}
          placeholder="Search manufacturers..."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredManufacturers.map((manufacturer) => (
            <div
              key={manufacturer.model}
              onClick={() => navigate(`/devices/${manufacturer.model}`)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
                {manufacturer.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};