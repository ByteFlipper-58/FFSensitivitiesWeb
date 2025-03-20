import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDevices } from '../hooks/useDevices';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const SensitivitiesScreen: React.FC = () => {
  const { manufacturerModel, deviceName } = useParams<{ manufacturerModel: string; deviceName: string }>();
  const { devices, loading, error } = useDevices(manufacturerModel || '');
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const device = devices.find(d => d.name === deviceName);
  if (!device) return <div className="text-center p-4">Device not found</div>;

  const copySettings = () => {
    const settings = JSON.stringify(device.sensitivities, null, 2);
    navigator.clipboard.writeText(settings);
    alert('Settings copied to clipboard!');
  };

  const shareSettings = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(`/devices/${manufacturerModel}`)}
          className="flex items-center text-blue-600 dark:text-blue-400 mb-8 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Devices
        </button>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">
            {device.name}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Sensitivity Settings
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-gray-600 dark:text-gray-300">DPI</span>
              <span className="font-semibold text-gray-900 dark:text-white">{device.dpi}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-gray-600 dark:text-gray-300">Fire Button Size</span>
              <span className="font-semibold text-gray-900 dark:text-white">{device.fire_button}</span>
            </div>
          </div>

          <div className="space-y-6">
            {Object.entries(device.sensitivities).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 capitalize">
                  {key.replace('_', ' ')}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    value={value}
                    min="0"
                    max="200"
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    readOnly
                  />
                  <span className="w-12 text-right font-medium text-gray-900 dark:text-white">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={copySettings}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Copy Settings
            </button>
            <button
              onClick={shareSettings}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};