import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ArcGISPage from './pages/ArcGISPage';
import MapboxPage from './pages/MapboxPage';
import LeafletPage from './pages/LeafletPage';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/arcgis" element={<ArcGISPage />} />
            <Route path="/mapbox" element={<MapboxPage />} />
            <Route path="/leaflet" element={<LeafletPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
