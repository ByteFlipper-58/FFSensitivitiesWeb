import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import '../styles/SensitivitiesScreen.module.css' // Import module styles

function SensitivitiesScreen() {
    const { manufacturer, model, device } = useParams();
    const parsedDevice = JSON.parse(decodeURIComponent(device));


    return (
      <div className="sensitivities-container">
            <h1>{manufacturer} {model}</h1>
           {parsedDevice.dpi && <p>DPI: {parsedDevice.dpi}</p>}
            <p>Fire Button: {parsedDevice.fire_button}</p>
            <Slider
                label="Общее"
                initialValue={parsedDevice.sensitivities?.review || 0}
                enabled={false}
            />
             <Slider
                label="Коллиматор"
                initialValue={parsedDevice.sensitivities?.collimator || 0}
                enabled={false}
             />
            <Slider
                label="x2 Прицел"
                initialValue={parsedDevice.sensitivities?.x2_scope || 0}
                enabled={false}
            />
             <Slider
                label="x4 Прицел"
                initialValue={parsedDevice.sensitivities?.x4_scope || 0}
                 enabled={false}
            />
      </div>
    );
}

export default SensitivitiesScreen;