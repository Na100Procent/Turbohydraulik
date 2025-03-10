import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import Link from "next/link";
import RectangularButton from "../../shared/RectangularButton";

interface Props {
  cityName: string;
  cityUrl: string;
}

const container = {
  width: {
    xl: "400px",
    lg: "400px",
    md: "400px",
    sm: "350px",
    xs: "350px",
    xxs: "350px",
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
  height: "65%",
  objectFit: "cover",
};
const cityNameSx = {
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontSize: "20px",
  minWidth: "120px",
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
const CityCard = ({ cityName, cityUrl }: Props) => {
  return (
    <Box sx={container}>
      <Box
        component="img"
        src="https://falstaff.b-cdn.net/storage/2023/03/Header-Long-weekend-warsaw.jpg?aspect_ratio=4:3"
        sx={imgSx}
      />

      <Box sx={titleButtonSx}>
        <Typography sx={cityNameSx}>{cityName}</Typography>

        <Link href={`${cityUrl}`}>
          <RectangularButton
            title="VIEW SERVICES"
            bgColor={theme.palette.secondary.main}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default CityCard;
