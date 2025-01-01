import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Slider.module.css';

const SliderComponent = ({ label, initialValue = 0, enabled = true }) => {

   return (
     <div className="slider-container">
         <div className="slider-label-container">
           <span className="slider-label">{label}</span>
          <span className="slider-value">{(initialValue).toFixed(0)}</span>
       </div>
         <Slider
             min={0}
             max={200}
             step={1}
             defaultValue={initialValue}
             disabled={!enabled}
             railStyle={{ backgroundColor: '#E0E0E0', height: '6px' }}
             trackStyle={{ backgroundColor: '#7E57C2', height: '6px' }}
              handleStyle={{
                  borderColor: '#7E57C2',
                  height: 20,
                  width: 20,
                  marginTop: -7,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                 boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)',
              }}
          />
     </div>
   );
};

export default SliderComponent;