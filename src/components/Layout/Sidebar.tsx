import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Info } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { name: 'Главная', path: '/', icon: Home },
    { name: 'О проекте', path: '/about', icon: Info },
  ];

  return (
    <div className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">FF Sensitivities</h1>
      </div>
      <nav className="flex-1 p-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors mb-1
                ${isActive 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};