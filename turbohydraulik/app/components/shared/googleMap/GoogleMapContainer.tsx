"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import ErrorMessage from "../ErrorMessage";

export interface CityCords {
  lat: number;
  lng: number;
}

interface Props {
  cityCords: CityCords;
}

const containerStyle = {
  width: "100%",
  height: "500px",
};

const GoogleMapContainer = ({ cityCords }: Props) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || "",
  });

  if (loadError) {
    return <ErrorMessage message={"Błąd ładowania Google Maps"} />;
  }

  if (!isLoaded) {
    return <p style={{ textAlign: "center" }}>Ładowanie mapy...</p>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={cityCords} zoom={12}>
      <Marker position={cityCords} />
    </GoogleMap>
  );
};

export default GoogleMapContainer;
