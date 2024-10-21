import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap: React.FC = () => (
  <MapContainer center={[34.0522, -118.2437]} zoom={10} style={{ height: '500px', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={[34.0522, -118.2437]}>
      <Popup>Los Angeles</Popup>
    </Marker>
  </MapContainer>
);

const LeafletPage: React.FC = () => (
  <div>
    <h1>React Leaflet Map</h1>
    <LeafletMap />
  </div>
);

export default LeafletPage;
