import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

function AboutScreen() {
    return (
        <div>
            <Card style={{ margin: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>About App</h1>
             </Card>
             <Card style={{ margin: 15}}>
             <p>
               This is a simple implementation of the FF Sensitivity application in React.
                </p>
                <Button style={{ marginTop: 10, background: 'lightgray', color: 'black', border: 'none', padding: '10px', borderRadius: '5px' }}
                    onClick={() => window.open("https://github.com/ByteFlipper-58/FFSensitivities2", "_blank")}
                   >GitHub link</Button>
           </Card>
        </div>
    );
}

export default AboutScreen;