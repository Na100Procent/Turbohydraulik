import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import Link from "next/link";
import RectangularButton from "../../shared/RectangularButton";
import { mockedCityCardUrl } from "@/app/constants/imagesUrls";

interface Props {
  cityName: string;
  cityCardUrl?: string;
  cityUrl: string;
}

const container = {
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(41, 40, 40, 0.1)",
    transform: "scale(1.02)",
  },
  width: {
    xl: "400px",
    lg: "400px",
    md: "400px",
    sm: "350px",
    xs: "300px",
    xxs: "250px",
  },

  padding: "0px 10px 10px 10px ",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#f5f5f5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};
const imgSx = {
  marginTop: "10px",
  width: "90%",
  maxHeight: "180px",
  objectFit: "cover",
  borderRadius: "5px",
};
const cityNameSx = {
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontSize: "18px",
  minWidth: "100px",
};

const titleButtonSx = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",

  alignItems: {
    xl: "center",
    lg: "center",
    md: "center",
    sm: "left",
    xs: "left",
    xxs: "left",
  },
  padding: "20px 20px 10px 20px",
  gap: "20px",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
};

const CityCard = ({ cityName, cityUrl, cityCardUrl }: Props) => {
  return (
    <Link href={`${cityUrl}`}>
      <Box sx={container}>
        <Box
          component="img"
          src={cityCardUrl ? cityCardUrl : mockedCityCardUrl}
          sx={imgSx}
          alt={`Turbo Hydraulik ${cityName}`}
        />

        <Box sx={titleButtonSx}>
          <Typography variant="h3" sx={cityNameSx}>
            {cityName}
          </Typography>

          <RectangularButton
            title="Sprawdź usługi"
            bgColor={theme.palette.secondary.main}
          />
        </Box>
      </Box>
    </Link>
  );
};

export default CityCard;
