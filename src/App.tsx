import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ManufacturersScreen } from './screens/ManufacturersScreen';
import { DevicesScreen } from './screens/DevicesScreen';
import { SensitivitiesScreen } from './screens/SensitivitiesScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<ManufacturersScreen />} />
          <Route path="/devices/:manufacturerModel" element={<DevicesScreen />} />
          <Route path="/sensitivities/:manufacturerModel/:deviceName" element={<SensitivitiesScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;