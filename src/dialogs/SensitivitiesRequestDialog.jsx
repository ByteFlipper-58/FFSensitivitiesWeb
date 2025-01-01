import React from 'react';
import Button from '../components/Button';

function SensitivitiesRequestDialog({ onDismiss, onRequestSent }) {
    const handleRequest = () => {
         onRequestSent()
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 8 }}>
                <h2>Request Sensitivities Settings</h2>
                <p>Information that will be sent to the developer:</p>
                <ul>
                  <li>Model: {navigator.userAgent}</li>
                </ul>
                <p>
                  Click the Request button to submit a settings request, this action cannot be undone.
                </p>
                <Button style={{ marginRight: 10}} onClick={handleRequest}>Request</Button>
                <Button onClick={onDismiss}>Cancel</Button>
            </div>
        </div>
    );
}

export default SensitivitiesRequestDialog;