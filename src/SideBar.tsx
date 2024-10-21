import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <h3>Map Navigation</h3>
      <ul>
        <li><Link to="/arcgis">ArcGIS Map</Link></li>
        <li><Link to="/mapbox">Mapbox Map</Link></li>
        <li><Link to="/leaflet">React Leaflet Map</Link></li>
        <li><Link to="/layers">Open Layers</Link></li>

      </ul>
    </div>
  );
}

export default Sidebar;
