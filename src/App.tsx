import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ManufacturersScreen } from './screens/ManufacturersScreen';
import { DevicesScreen } from './screens/DevicesScreen';
import { SensitivitiesScreen } from './screens/SensitivitiesScreen';
import { AboutScreen } from './screens/AboutScreen';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ManufacturersScreen />} />
          <Route path="/devices/:manufacturerModel" element={<DevicesScreen />} />
          <Route path="/sensitivities/:manufacturerModel/:deviceName" element={<SensitivitiesScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;