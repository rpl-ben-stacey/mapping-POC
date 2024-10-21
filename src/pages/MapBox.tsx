import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

const MapboxMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const centerLatitude = parseFloat(process.env.REACT_APP_CENTERLATITUDE || '-37.67543797703169');
  const centerLongitude = parseFloat(process.env.REACT_APP_CENTERLONGITUDE || '176.0563796050459');
  const startZoom = parseInt(process.env.REACT_APP_STARTZOOM || '17', 10);

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      console.error("Mapbox access token is missing.");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [centerLongitude, centerLatitude], 
      zoom: startZoom,
    });

    return () => map.remove();
  }, [centerLatitude, centerLongitude, startZoom]);

  return <div ref={mapContainerRef} style={{ height: '500px', width: '100%' }} />;
};

const MapboxPage: React.FC = () => (
  <div>
    <h1>Mapbox Map</h1>
    <MapboxMap />
  </div>
);

export default MapboxPage;
