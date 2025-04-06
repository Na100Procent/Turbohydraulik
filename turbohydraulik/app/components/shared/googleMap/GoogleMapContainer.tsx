"use client";
import React, { Suspense, useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  Libraries,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import ErrorMessage from "../ErrorMessage";
import { CityCords } from "./types";
import { Box } from "@mui/material";
import PlaceDetails from "./components/PlaceDetails";
import SimpleInfo from "./components/SimpleInfo";
import { useInView } from "react-intersection-observer";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const libraries: Libraries = ["places"];

interface Props {
  cityCords: CityCords;
  address1: string;
  address2?: string;
  placeId?: string;
  cityName?: string;
}

const GoogleMapContainer = ({
  cityCords,
  address1,
  address2,
  placeId,
  cityName,
}: Props) => {
  const [showInfo, setShowInfo] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
    language: "pl",
  });

  useEffect(() => {
    if (!inView) return;
  }, [inView]);

  if (!inView) return <div ref={ref}></div>;

  if (!isLoaded)
    return <p style={{ textAlign: "center" }}>Ładowanie mapy...</p>;

  if (loadError) return <ErrorMessage message="Błąd ładowania Google Maps" />;

  return (
    <Suspense
      fallback={<p style={{ textAlign: "center" }}>Ładowanie mapy...</p>}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={cityCords}
        zoom={12}
        key={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
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
    </Suspense>
  );
};

export default GoogleMapContainer;
