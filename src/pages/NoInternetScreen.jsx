import React from 'react';
import Button from '../components/Button';

function NoInternetScreen({ onRetry }) {
    return (
        <div>
            <h1>No Internet</h1>
            <p>No internet connection</p>
            <Button onClick={onRetry}>Retry</Button>
        </div>
    );
}

export default NoInternetScreen;