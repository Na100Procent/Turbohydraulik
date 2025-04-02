"use client";
import theme from "@/app/theme/theme";
import { CircularProgress, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const PlaceDetails = ({ placeId }: { placeId: string }) => {
  const [placeDetails, setPlaceDetails] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    setLoading(true);
    service.getDetails({ placeId }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setPlaceDetails(place);
      }
      setLoading(false);
    });
  }, [placeId]);

  if (loading) return <CircularProgress size={20} sx={{ ml: 1 }} />;
  if (!placeDetails) return <p>Nie znaleziono szczegółowych danych</p>;

  return (
    <>
      <h3>{placeDetails.name}</h3>
      <Typography>
        <strong>Adres:</strong> {placeDetails.formatted_address}
      </Typography>
      <Typography>
        <strong>Ocena:</strong> {placeDetails.rating || "Brak ocen"}
      </Typography>
      {placeDetails.url && (
        <Link
          href={placeDetails.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.palette.primary.main,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Zobacz nas na Mapach Google
        </Link>
      )}
    </>
  );
};

export default PlaceDetails;
