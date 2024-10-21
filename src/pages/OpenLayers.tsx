import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj'; 

const OpenLayersMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const centerLatitude = parseFloat(
    process.env.REACT_APP_CENTERLATITUDE || "-37.67543797703169"
  );
  const centerLongitude = parseFloat(
    process.env.REACT_APP_CENTERLONGITUDE || "176.0563796050459"
  );
  const startZoom = parseInt(process.env.REACT_APP_STARTZOOM || '17', 10);

  useEffect(() => {
    let map: Map | undefined;

    if (mapRef.current) {
      map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(), 
          }),
        ],
        view: new View({
          center: fromLonLat([centerLongitude, centerLatitude]),
          zoom: startZoom,
        }),
      });
    }

    return () => {
      if (map) {
        map.setTarget(undefined);
      }
    };
  }, [centerLatitude, centerLongitude, startZoom]);

  return <div style={{ height: '500px', width: '100%' }} ref={mapRef} />;
};

const OpenLayersPage: React.FC = () => (
  <div>
    <h1>OpenLayers Map</h1>
    <OpenLayersMap />
  </div>
);

export default OpenLayersPage;
