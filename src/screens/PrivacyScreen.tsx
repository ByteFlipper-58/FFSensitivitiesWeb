import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Share2, Bell, RefreshCw, MessageSquare } from 'lucide-react';
import { trackEvent, ANALYTICS_EVENTS } from '../lib/analytics';
import { SEO } from '../components/SEO';

export const PrivacyScreen: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, { page: 'privacy' });
  }, []);

  const sections = [
    {
      icon: Shield,
      title: t('privacy.introduction.title'),
      content: t('privacy.introduction.description'),
    },
    {
      icon: Lock,
      title: t('privacy.information.automatic.title'),
      content: (
        <div className="space-y-4">
          <p>{t('privacy.information.automatic.description')}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {Object.values(t('privacy.information.automatic.items', { returnObjects: true })).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      icon: Bell,
      title: t('privacy.information.purpose.title'),
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          {Object.values(t('privacy.information.purpose.items', { returnObjects: true })).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      icon: Share2,
      title: t('privacy.sharing.title'),
      content: t('privacy.sharing.description'),
    },
    {
      icon: Lock,
      title: t('privacy.security.title'),
      content: t('privacy.security.description'),
    },
    {
      icon: RefreshCw,
      title: t('privacy.changes.title'),
      content: t('privacy.changes.description'),
    },
    {
      icon: MessageSquare,
      title: t('privacy.contact.title'),
      content: t('privacy.contact.description'),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <SEO 
        title={t('privacy.title')}
        description={t('privacy.introduction.description')}
      />
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {t('privacy.title')}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          {t('privacy.lastUpdated')}
        </p>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-8 last:pb-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h2>
                    <div className="text-gray-600 dark:text-gray-300 space-y-4">
                      {typeof section.content === 'string' ? (
                        <p>{section.content}</p>
                      ) : (
                        section.content
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};