import { useState, useEffect } from 'react';
import axios from 'axios';
import { Manufacturer } from '../types';

const MANUFACTURERS_URL = 'https://raw.githubusercontent.com/ByteFlipper-58/FFSensitivities2/refs/heads/master/app/src/main/assets/sensitivity_settings/manufacturers.json';

export const useManufacturers = () => {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await axios.get(MANUFACTURERS_URL);
        setManufacturers(response.data.manufacturers);
        setLoading(false);
      } catch (err) {
        setError('Failed to load manufacturers');
        setLoading(false);
      }
    };

    fetchManufacturers();
  }, []);

  return { manufacturers, loading, error };
};