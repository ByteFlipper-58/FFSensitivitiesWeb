import React, { useState, useEffect } from 'react';
import AnimatedShimmer from '../components/AnimatedShimmer';
import Card from '../components/Card';
import Button from '../components/Button';
import { fetchManufacturers } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import SensitivitiesRequestDialog from '../dialogs/SensitivitiesRequestDialog';

function HomeScreen() {
    const [manufacturers, setManufacturers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchManufacturers();
                 setManufacturers(data.manufacturers);
            } catch (error) {
                console.error("Error loading manufacturers:", error);
            } finally {
                setLoading(false);
            }
        }
      loadData()
    }, []);

     const handleRequestSent = () => {
      setShowDialog(false);
  };

    return (
        <div>
             <Card style={{ margin: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => setShowDialog(true)}
                >
                   <p>Don't have your phone model? Make a request!</p>
                </Card>
              {showDialog && <SensitivitiesRequestDialog onDismiss={() => setShowDialog(false)} onRequestSent={handleRequestSent}/>}
            {loading ? (
                <AnimatedShimmer />
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: 10 }}>
                    {manufacturers.map((manufacturer) => (
                        <Card
                             key={manufacturer.name}
                             onClick={() => navigate(`/devices/${manufacturer.name}/${manufacturer.model}`)}
                            >
                                {manufacturer.name}
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomeScreen;