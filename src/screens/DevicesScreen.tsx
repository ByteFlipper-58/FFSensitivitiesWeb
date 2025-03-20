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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 dark:text-blue-400 mb-8 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Manufacturers
        </button>

        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          {devices[0]?.manufacturer} Devices
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Select your device model
        </p>

        <SearchBar 
          value={search}
          onChange={setSearch}
          placeholder="Search devices..."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDevices.map((device) => (
            <div
              key={device.name}
              onClick={() => navigate(`/sensitivities/${manufacturerModel}/${device.name}`)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
                {device.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};