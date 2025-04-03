import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Info, ChevronLeft, ChevronRight, Heart, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LINKS } from '../../config/links';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const items = [
    { name: t('common.home'), path: '/', icon: Home },
    { name: t('common.about'), path: '/about', icon: Info },
  ];

  const appStores = [
    {
      name: 'Google Play',
      url: LINKS.stores.googlePlay,
      className: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'RuStore',
      url: LINKS.stores.ruStore,
      className: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div 
      className={`hidden lg:flex flex-col bg-white dark:bg-gray-800 shadow-lg fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="flex-shrink-0 p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <div className={`overflow-hidden transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
            FF Sensitivities
          </h1>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors mb-1 ${
                isActive 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className={`flex items-center justify-center ${isCollapsed ? 'w-full' : 'w-auto'}`}>
                <Icon className="w-5 h-5 flex-shrink-0" />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0' : 'ml-3 opacity-100'}`}>
                <span className="font-medium whitespace-nowrap">{item.name}</span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-2">
          {appStores.map((store) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center rounded-lg text-white transition-colors ${store.className} ${
                isCollapsed ? 'h-10 w-10' : 'px-4 py-2'
              }`}
            >
              <Download className={`w-5 h-5 flex-shrink-0 ${!isCollapsed && 'mr-2'}`} />
              {!isCollapsed && <span className="font-medium whitespace-nowrap">{store.name}</span>}
            </a>
          ))}
          <button
            onClick={() => navigate('/support')}
            className={`w-full flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-colors ${
              isCollapsed ? 'h-10 w-10' : 'px-4 py-2'
            }`}
          >
            <Heart className={`w-5 h-5 flex-shrink-0 ${!isCollapsed && 'mr-2'}`} />
            {!isCollapsed && <span className="font-medium whitespace-nowrap">{t('common.support')}</span>}
          </button>
        </div>
        <div className={`mt-2 text-center text-xs text-gray-500 dark:text-gray-400 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
          Версия 1.0.0
        </div>
      </div>
    </div>
  );
};