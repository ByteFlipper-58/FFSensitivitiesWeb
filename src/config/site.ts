import { FirebaseOptions } from '@firebase/app';

interface SiteConfig {
  name: string;
  firebase: {
    enabled: boolean;
    config: FirebaseOptions | null;
    error?: string;
  };
}

const requiredFirebaseEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
  'VITE_FIREBASE_MEASUREMENT_ID',
] as const;

const checkFirebaseConfig = (): { enabled: boolean; config: FirebaseOptions | null; error?: string } => {
  const missingVars = requiredFirebaseEnvVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    return {
      enabled: false,
      config: null,
      error: `Missing required Firebase environment variables: ${missingVars.join(', ')}. Please add them to your .env file.`,
    };
  }

  return {
    enabled: true,
    config: {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    },
  };
};

export const siteConfig: SiteConfig = {
  name: 'FF Sensitivities',
  firebase: checkFirebaseConfig(),
};