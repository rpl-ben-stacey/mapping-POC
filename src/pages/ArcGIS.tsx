import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

const ArcGISMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const centerLatitude = parseFloat(process.env.REACT_APP_CENTERLATITUDE || '-37.67543797703169');
  const centerLongitude = parseFloat(process.env.REACT_APP_CENTERLONGITUDE || '176.0563796050459');
  const startZoom = parseInt(process.env.REACT_APP_STARTZOOM || '17', 10);

  useEffect(() => {
    let view: __esri.MapView | undefined;

    loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
      .then(([Map, MapView]) => {
        const map = new Map({ basemap: 'streets' });
        view = new MapView({
          container: mapRef.current as HTMLDivElement,
          map,
          center: [centerLongitude, centerLatitude],
          zoom: startZoom,
        });
      })
      .catch(err => console.error(err));

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, [centerLatitude, centerLongitude, startZoom]);

  return <div style={{ height: '500px', width: '100%' }} ref={mapRef} />;
};

const ArcGISPage: React.FC = () => (
  <div>
    <h1>ArcGIS Map</h1>
    <ArcGISMap />
  </div>
);

export default ArcGISPage;
