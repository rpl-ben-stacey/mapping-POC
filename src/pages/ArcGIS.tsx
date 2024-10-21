import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

const ArcGISMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let view: any;
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
      .then(([Map, MapView]) => {
        const map = new Map({ basemap: 'streets' });
        view = new MapView({
          container: mapRef.current as HTMLDivElement,
          map,
          center: [-118.2437, 34.0522], // Longitude, latitude
          zoom: 10,
        });
      });
    return () => {
      if (view) view.destroy();
    };
  }, []);

  return <div style={{ height: '500px', width: '100%' }} ref={mapRef} />;
};

const ArcGISPage: React.FC = () => (
  <div>
    <h1>ArcGIS Map</h1>
    <ArcGISMap />
  </div>
);

export default ArcGISPage;
