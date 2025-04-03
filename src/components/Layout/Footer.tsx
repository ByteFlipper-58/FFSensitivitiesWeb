import React from 'react';
import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 FF Sensitivities. Все права защищены.
            </p>
            <Link
              to="/privacy"
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              {t('common.privacy')}
            </Link>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <a
              href="https://github.com/ByteFlipper-58/FFSensitivities2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};