"use client";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { CityCords } from "./types";
import { Box } from "@mui/material";

interface Props {
  cityCords: CityCords;
  title: string;
  address1: string;
  address2?: string;
  placeId?: string;
}

const containerStyle = {
  width: "100%",
  height: "500px",
};

const GoogleMapContainer = ({
  cityCords,
  title,
  address1,
  address2,
  placeId,
}: Props) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [showInfo, setShowInfo] = useState(false);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || "",
  });

  if (!apiKey) {
    return <ErrorMessage message={"Błąd klucza API KEY"} />;
  }
  if (loadError) {
    return <ErrorMessage message={"Błąd ładowania Google Maps"} />;
  }

  if (!isLoaded) {
    return <p style={{ textAlign: "center" }}>Ładowanie mapy...</p>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={cityCords}
      zoom={12}
      key={apiKey}
    >
      <Marker position={cityCords} onClick={() => setShowInfo(true)} />
      {showInfo && (
        <InfoWindow
          position={cityCords}
          onCloseClick={() => setShowInfo(false)}
        >
          <Box>
            <h3>{title}</h3>
            <p>{address1}</p>
            {address2 && <p>{address2}</p>}
            {placeId && (
              <p>
                <strong>Place ID:</strong> {placeId}
              </p>
            )}
          </Box>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default GoogleMapContainer;
