import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './i18n';
import './index.css';
import { initializeFirebase, initializeAnalytics } from './lib/firebase';
import { initAnalytics } from './lib/analytics';
import { siteConfig } from './config/site';

// Initialize Firebase if enabled
const app = initializeFirebase();
if (app) {
  const analytics = await initializeAnalytics();
  initAnalytics(analytics);
} else if (siteConfig.firebase.error) {
  console.warn('Firebase initialization skipped:', siteConfig.firebase.error);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);