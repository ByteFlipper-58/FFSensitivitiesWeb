import React from 'react';
import Button from '../components/Button';

function ErrorScreen({ errorMessage, onRetry, onReportBug }) {
    return (
        <div>
            <h1>Error</h1>
            <p>{errorMessage}</p>
            <Button onClick={onRetry}>Try Again</Button>
            <Button onClick={onReportBug}>Report Bug</Button>
        </div>
    );
}

export default ErrorScreen;