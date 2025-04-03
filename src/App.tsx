import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ManufacturersScreen } from './screens/ManufacturersScreen';
import { DevicesScreen } from './screens/DevicesScreen';
import { SensitivitiesScreen } from './screens/SensitivitiesScreen';
import { AboutScreen } from './screens/AboutScreen';
import { SupportScreen } from './screens/SupportScreen';
import { PrivacyScreen } from './screens/PrivacyScreen';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ManufacturersScreen />} />
          <Route path="/devices/:manufacturerModel" element={<DevicesScreen />} />
          <Route path="/sensitivities/:manufacturerModel/:deviceName" element={<SensitivitiesScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/support" element={<SupportScreen />} />
          <Route path="/privacy" element={<PrivacyScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;