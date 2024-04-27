import { useState } from "react";
import Navbar from "./Navbar";
import Logout from "./Logout";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import AirportTable from "./AirportTable";
import "leaflet/dist/leaflet.css";
import { Button } from "@mui/material";

const Secrets = () => {
  const [map, setMap] = useState(null);
  const [mapCenter, setMapCenter] = useState([13, 100]);
  const [mapView, setMapView] = useState(5);
  const [isMakerHidden, setIsMakerHidden] = useState(true);
  const [mapZoom, setMapZoom] = useState(null);

  const onMapLoad = (mapInstance) => {
    console.log("Map loaded:", mapInstance);
    setMap(mapInstance);
  };

  const updateMap = (lat, lon, zoom, action) => {
    setMapCenter([lat, lon]);
    setMapZoom(zoom);
    setIsMakerHidden(false);

    if (action === "flyTo") {
      map && map.flyTo([lat, lon], zoom, { animate: true });
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-screen-xl mx-auto py-10">
          <h1 className="text-center text-2xl font-extrabold">
            Thailand Airports
          </h1>
          <hr className="my-4" />

          <div className="flex flex-row justify-center  space-x-4 space-y-2">
            <MapContainer
              id="map"
              style={{
                height: "100vh",
                width: "70vw",
              }}
              ref={setMap}
              center={mapCenter}
              zoom={mapView}
              scrollWheelZoom={true}
              onLoad={onMapLoad}>
              {!isMakerHidden && mapZoom && (
                <Marker position={mapCenter}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              )}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
            <AirportTable updateMap={updateMap} />
          </div>
        </div>
        <div className="pb-5">
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Secrets;
