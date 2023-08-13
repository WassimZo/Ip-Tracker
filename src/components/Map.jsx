import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { icon } from "leaflet";

export default function Map() {
  const ipInfo = useSelector((state) => state.ipInfo);
  const [MarkupLoc, setMarkupLoc] = useState([0, 0]);
  const [centerLoc, setCenterLoc] = useState([0, 0]);
  const mapIcon = icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [32, 40],
  });

  useEffect(() => {
    if (ipInfo.location.city) {
      setMarkupLoc((MarkupLoc) => [ipInfo.location.lat, ipInfo.location.lng]);
      setCenterLoc((centerLoc) => [
        ipInfo.location.lat + 0.01,
        ipInfo.location.lng,
      ]);
    }
  }, [ipInfo]);

  return (
    <MapContainer
      key={JSON.stringify(centerLoc)}
      className="min-w-full min-h-[65vh]"
      center={centerLoc}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={MarkupLoc} icon={mapIcon}>
        <Popup>
          <b>{ipInfo.ip}</b>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
