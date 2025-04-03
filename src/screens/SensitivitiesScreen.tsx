import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Copy, Share2 } from 'lucide-react';
import { useDevices } from '../hooks/useDevices';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { trackEvent, ANALYTICS_EVENTS } from '../lib/analytics';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export const SensitivitiesScreen: React.FC = () => {
  const { manufacturerModel, deviceName } = useParams<{ manufacturerModel: string; deviceName: string }>();
  const { devices, loading, error } = useDevices(manufacturerModel || '');
  const { t } = useTranslation();

  useEffect(() => {
    trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, {
      page: 'sensitivities',
      manufacturer_model: manufacturerModel,
      device_name: deviceName,
    });
  }, [manufacturerModel, deviceName]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const device = devices.find(d => d.name === deviceName);
  if (!device) return <div className="text-center p-4">{t('sensitivities.notFound')}</div>;

  const copySettings = () => {
    const settings = JSON.stringify(device.sensitivities, null, 2);
    navigator.clipboard.writeText(settings);
    trackEvent(ANALYTICS_EVENTS.COPY_SETTINGS, {
      device_name: device.name,
      manufacturer: device.manufacturer,
    });
    alert(t('sensitivities.copied'));
  };

  const shareSettings = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    trackEvent(ANALYTICS_EVENTS.SHARE_SETTINGS, {
      device_name: device.name,
      manufacturer: device.manufacturer,
    });
    alert(t('sensitivities.linkCopied'));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <SEO 
        title={t('sensitivities.title', { device: device.name })}
        description={t('sensitivities.subtitle', { device: device.name })}
      />
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {device.name}
          </h1>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {t('sensitivities.freeReview')}
            </p>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {device.dpi} {t('sensitivities.dpi')}
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
            {t('sensitivities.copy')}
          </button>
          <button
            onClick={shareSettings}
            className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            <Share2 className="w-4 h-4 mr-1" />
            {t('sensitivities.share')}
          </button>
        </div>
      </div>
    </div>
  );
};