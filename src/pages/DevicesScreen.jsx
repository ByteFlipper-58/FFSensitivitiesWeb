import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AnimatedShimmer from '../components/AnimatedShimmer';
import Card from '../components/Card';
import { fetchDevicesByModel } from '../utils/api';

function DevicesScreen() {
    const { name, model } = useParams();
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchDevicesByModel(model)
                setDevices(data.models);
            } catch (error) {
                console.error("Error loading devices:", error);
            } finally {
                setLoading(false);
            }
        }

        loadData()
    }, [model]);

    return (
      <div>
        <h1>Devices for: {name}</h1>
          {loading ? (
            <AnimatedShimmer />
        ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px', padding: 10 }}>
                {devices.map((device) => (
                    <Card
                    key={device.name}
                        onClick={() => navigate(`/sensitivities/${device.manufacturer}/${device.name}/${encodeURIComponent(JSON.stringify(device))}`)}
                        >
                        {device.name}
                        </Card>
                ))}
            </div>
        )}
      </div>
    );
}

export default DevicesScreen;