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
    <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-3 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        FF Sensitivities
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-lg">
        Выберите производителя вашего устройства
      </p>
      
      <div className="space-y-6">
        <SearchBar 
          value={search}
          onChange={setSearch}
          placeholder="Поиск производителей..."
        />

        <div className="grid grid-cols-2 gap-3">
          {filteredManufacturers.map((manufacturer) => (
            <div
              key={manufacturer.model}
              onClick={() => navigate(`/devices/${manufacturer.model}`)}
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