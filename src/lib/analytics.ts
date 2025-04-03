import { Analytics, logEvent } from 'firebase/analytics';

let analytics: Analytics | null = null;

export const initAnalytics = (analyticsInstance: Analytics | null) => {
  analytics = analyticsInstance;
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  } else {
    console.warn('Analytics not initialized');
  }
};

export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  SEARCH: 'search',
  SELECT_MANUFACTURER: 'select_manufacturer',
  SELECT_DEVICE: 'select_device',
  COPY_SETTINGS: 'copy_settings',
  SHARE_SETTINGS: 'share_settings',
  LANGUAGE_CHANGE: 'language_change',
  SUPPORT_CLICK: 'support_click',
  STORE_CLICK: 'store_click',
  SOCIAL_LINK_CLICK: 'social_link_click',
} as const;