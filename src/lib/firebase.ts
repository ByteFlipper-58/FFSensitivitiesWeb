import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { siteConfig } from '../config/site';

let app = null;

export const initializeFirebase = () => {
  if (!siteConfig.firebase.enabled) {
    console.warn('Firebase is disabled:', siteConfig.firebase.error);
    return null;
  }

  try {
    app = initializeApp(siteConfig.firebase.config!);
    return app;
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return null;
  }
};

export const initializeAnalytics = async () => {
  if (!app) return null;

  try {
    const analyticsSupported = await isSupported();
    if (analyticsSupported) {
      return getAnalytics(app);
    }
    return null;
  } catch (error) {
    console.error('Error initializing analytics:', error);
    return null;
  }
};