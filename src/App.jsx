import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import DevicesScreen from './pages/DevicesScreen';
import SensitivitiesScreen from './pages/SensitivitiesScreen';
import AboutScreen from './pages/AboutScreen';
import ErrorScreen from './pages/ErrorScreen';
import NoInternetScreen from './pages/NoInternetScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import {ThemeProvider} from "./context/ThemeContext";

function App() {
  return (
     <ThemeProvider>
         <Router>
            <Routes>
               <Route path="/" element={<WelcomeScreen onStartClick={() => {window.location.href = '/home'}} />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/devices/:name/:model" element={<DevicesScreen />} />
                <Route path="/sensitivities/:manufacturer/:model/:device" element={<SensitivitiesScreen />} />
                 <Route path="/about" element={<AboutScreen />} />
                <Route path="/error" element={<ErrorScreen />} />
                <Route path="/nointernet" element={<NoInternetScreen />} />
            </Routes>
         </Router>
     </ThemeProvider>

  );
}

export default App;