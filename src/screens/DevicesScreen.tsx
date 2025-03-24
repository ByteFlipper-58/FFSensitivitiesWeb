import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDevices } from '../hooks/useDevices';
import { SearchBar } from '../components/SearchBar';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const DevicesScreen: React.FC = () => {
  const { manufacturerModel } = useParams<{ manufacturerModel: string }>();
  const { devices, loading, error } = useDevices(manufacturerModel || '');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const filteredDevices = devices.filter(device => 
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto px-4">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Назад к производителям
      </button>

      <h1 className="text-4xl font-extrabold text-center mb-3 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        {devices[0]?.manufacturer}
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-lg">
        Выберите модель вашего устройства
      </p>

      <div className="space-y-6">
        <SearchBar 
          value={search}
          onChange={setSearch}
          placeholder="Поиск устройств..."
        />

        <div className="grid grid-cols-2 gap-3">
          {filteredDevices.map((device) => (
            <div
              key={device.name}
              onClick={() => navigate(`/sensitivities/${manufacturerModel}/${device.name}`)}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <h2 className="text-base font-semibold text-center text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {device.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};