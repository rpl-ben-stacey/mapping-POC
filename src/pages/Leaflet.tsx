import React from "react";
import { MapContainer, TileLayer,} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap: React.FC = () => {
  const centerLatitude = parseFloat(
    process.env.REACT_APP_CENTERLATITUDE || "-37.67543797703169"
  );
  const centerLongitude = parseFloat(
    process.env.REACT_APP_CENTERLONGITUDE || "176.0563796050459"
  );
  const startZoom = parseInt(process.env.REACT_APP_STARTZOOM || "17", 10);
  const maxZoom = parseInt(process.env.REACT_APP_MAXZOOM || "23", 10);
  const tileUrl =
    process.env.REACT_APP_TILE_URL || ""

  return (
    <MapContainer
      center={[centerLatitude, centerLongitude]}
      zoom={startZoom}
      maxZoom={maxZoom}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url={tileUrl}
        maxNativeZoom={21}
        maxZoom={maxZoom}
        minZoom={startZoom}
      />
    </MapContainer>
  );
};

const LeafletPage: React.FC = () => (
  <div>
    <h1>React Leaflet Map</h1>
    <LeafletMap />
  </div>
);

export default LeafletPage;
