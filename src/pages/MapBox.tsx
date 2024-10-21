import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapboxMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-118.2437, 34.0522], // Starting position [lng, lat]
      zoom: 10, // Starting zoom
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ height: '500px', width: '100%' }} />;
};

const MapboxPage: React.FC = () => (
  <div>
    <h1>Mapbox Map</h1>
    <MapboxMap />
  </div>
);

export default MapboxPage;
