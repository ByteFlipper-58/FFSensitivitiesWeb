import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Share2 } from 'lucide-react';
import { useDevices } from '../hooks/useDevices';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const SensitivitiesScreen: React.FC = () => {
  const { manufacturerModel, deviceName } = useParams<{ manufacturerModel: string; deviceName: string }>();
  const { devices, loading, error } = useDevices(manufacturerModel || '');
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const device = devices.find(d => d.name === deviceName);
  if (!device) return <div className="text-center p-4">Устройство не найдено</div>;

  const copySettings = () => {
    const settings = JSON.stringify(device.sensitivities, null, 2);
    navigator.clipboard.writeText(settings);
    alert('Настройки скопированы в буфер обмена!');
  };

  const shareSettings = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Ссылка скопирована в буфер обмена!');
  };

  return (
    <div>
      <button
        onClick={() => navigate(`/devices/${manufacturerModel}`)}
        className="flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Назад к устройствам
      </button>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {device.name}
          </h1>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Free Review
            </p>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {device.dpi} DPI
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                {device.fire_button}px
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(device.sensitivities).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-600 dark:text-gray-300 capitalize">
                {key.replace('_', ' ')}
              </label>
              <div className="flex-1 flex items-center gap-3">
                <div className="relative flex-1 h-6 flex items-center">
                  <div className="absolute w-full h-[1px] bg-gray-200 dark:bg-gray-700"></div>
                  <div className="absolute w-full flex justify-between px-1">
                    {[0, 50, 100, 150, 200].map((tick) => (
                      <div key={tick} className="h-2 w-[1px] bg-gray-300 dark:bg-gray-600"></div>
                    ))}
                  </div>
                  <div 
                    className="absolute h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
                    style={{ width: `${(value / 200) * 100}%` }}
                  />
                </div>
                <span className="w-12 text-right font-medium text-gray-900 dark:text-white">{value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={copySettings}
            className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Copy className="w-4 h-4 mr-1" />
            Копировать
          </button>
          <button
            onClick={shareSettings}
            className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            <Share2 className="w-4 h-4 mr-1" />
            Поделиться
          </button>
        </div>
      </div>
    </div>
  );
};