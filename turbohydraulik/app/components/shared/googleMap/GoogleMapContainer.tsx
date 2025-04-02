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
import PlaceDetails from "./components/PlaceDetails";
import SimpleInfo from "./components/SimpleInfo";

interface Props {
  cityCords: CityCords;
  address1: string;
  address2?: string;
  placeId?: string;
  cityName?: string;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const GoogleMapContainer = ({
  cityCords,
  address1,
  address2,
  placeId,
  cityName,
}: Props) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [showInfo, setShowInfo] = useState(false);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || "",
    libraries: ["places"],
    language: "pl",
  });

  if (!apiKey) return <ErrorMessage message="Błąd klucza API KEY" />;
  if (loadError) return <ErrorMessage message="Błąd ładowania Google Maps" />;
  if (!isLoaded)
    return <p style={{ textAlign: "center" }}>Ładowanie mapy...</p>;

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
            {placeId ? (
              <PlaceDetails placeId={placeId} />
            ) : (
              <SimpleInfo
                cityName={cityName}
                address1={address1}
                address2={address2}
              />
            )}
          </Box>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default GoogleMapContainer;
