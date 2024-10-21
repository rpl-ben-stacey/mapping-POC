import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
    process.env.REACT_APP_TILEURL ||
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <MapContainer
      center={[centerLatitude, centerLongitude]}
      zoom={startZoom}
      maxZoom={maxZoom}
      style={{ height: "500px", width: "100%" }}
    >
      {/* <TileLayer
        url={tileUrl}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      /> */}
      <TileLayer
        url={tileUrl}
        maxNativeZoom={21}
        maxZoom={maxZoom}
        minZoom={startZoom}
      />
      <Marker position={[centerLatitude, centerLongitude]}>
        <Popup>Center of the Map</Popup>
      </Marker>
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
