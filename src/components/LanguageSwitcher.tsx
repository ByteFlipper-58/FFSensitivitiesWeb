import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { trackEvent, ANALYTICS_EVENTS } from '../lib/analytics';

export const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    trackEvent(ANALYTICS_EVENTS.LANGUAGE_CHANGE, {
      from_language: i18n.language,
      to_language: newLang,
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
      aria-label={`Change language to ${i18n.language === 'en' ? 'Russian' : 'English'}`}
    >
      <Languages className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {i18n.language === 'en' ? 'RU-RU' : 'EN-EN'}
      </span>
    </button>
  );
};