import React, { useState } from 'react';
import Button from '../components/Button';

function WelcomeScreen({ onStartClick }) {
    return (
        <div>
            <h1>Welcome Screen</h1>
            <p>Welcome message here!</p>
            <Button onClick={onStartClick}>Start</Button>
        </div>
    );
}

export default WelcomeScreen;