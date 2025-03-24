import React from 'react';
import { Sidebar } from './Sidebar';
import { BottomTabBar } from './BottomTabBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <main className="flex-1 container mx-auto px-4 py-6 lg:py-8 pb-24 lg:pb-8">
          {children}
        </main>
        <BottomTabBar />
      </div>
    </div>
  );
};