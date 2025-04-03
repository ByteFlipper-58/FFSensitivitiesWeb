import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Toolbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isRoot = location.pathname === '/';

  return (
    <div className="lg:hidden bg-white dark:bg-gray-800 shadow-md">
      <div className="px-4 py-3 flex items-center">
        {!isRoot && (
          <button
            onClick={() => navigate(-1)}
            className="mr-3 text-gray-600 dark:text-gray-400"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          FF Sensitivities
        </h1>
      </div>
    </div>
  );
};