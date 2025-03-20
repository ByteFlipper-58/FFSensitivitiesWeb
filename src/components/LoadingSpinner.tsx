import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Loader2 className="w-12 h-12 animate-spin text-blue-600 dark:text-blue-400" />
    </div>
  );
};