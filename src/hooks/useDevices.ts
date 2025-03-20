import { useState, useEffect } from 'react';
import axios from 'axios';
import { Device } from '../types';

export const useDevices = (manufacturerModel: string) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/ByteFlipper-58/FFSensitivities2/refs/heads/master/app/src/main/assets/sensitivity_settings/${manufacturerModel}.json`
        );
        setDevices(response.data.models);
        setLoading(false);
      } catch (err) {
        setError('Failed to load devices');
        setLoading(false);
      }
    };

    if (manufacturerModel) {
      fetchDevices();
    }
  }, [manufacturerModel]);

  return { devices, loading, error };
};