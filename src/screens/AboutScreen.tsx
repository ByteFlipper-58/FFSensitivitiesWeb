import React from 'react';
import { Github, Heart, Download, Globe, MessageCircle, Users } from 'lucide-react';

export const AboutScreen: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          О проекте FF Sensitivities
        </h1>
        
        <div className="space-y-8 text-gray-600 dark:text-gray-300">
          <p className="text-lg">
            FF Sensitivities - это инструмент для оптимизации настроек чувствительности в играх,
            разработанный специально для улучшения игрового опыта.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
              Основные возможности
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Настройки для различных производителей устройств</li>
              <li>Оптимизированные значения чувствительности</li>
              <li>Удобный поиск по устройствам</li>
              <li>Возможность делиться настройками</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Скачать приложение
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.byteflipper.ffsensitivities"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors text-white"
              >
                <Download className="w-5 h-5" />
                <span>Google Play</span>
              </a>
              <a
              href="https://www.rustore.ru/catalog/app/com.byteflipper.ffsensitivities"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors text-white"
              >
                <Download className="w-5 h-5" />
                <span>RuStore</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://byteflipper.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white hover:from-blue-600 hover:to-blue-700 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>Сайт разработчика</span>
            </a>
            <a
              href="https://t.me/byteflipper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white hover:from-blue-500 hover:to-blue-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Telegram канал</span>
            </a>
            <a
              href="https://vk.com/byteflipper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 text-white hover:from-blue-700 hover:to-blue-800 transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>ВКонтакте</span>
            </a>
            <a
              href="https://github.com/ByteFlipper-58/ffSensitivitiesweb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-4 text-white hover:from-gray-800 hover:to-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="flex items-center justify-center text-sm">
              Сделано с
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              для игрового сообщества
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};