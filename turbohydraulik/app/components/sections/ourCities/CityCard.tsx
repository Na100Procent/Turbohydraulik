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
  minWidth: "400px",
  width: "100%",
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
const CityCard = ({ cityName, cityUrl }: Props) => {
  return (
    <Box sx={container}>
      <Box
        component="img"
        src="https://falstaff.b-cdn.net/storage/2023/03/Header-Long-weekend-warsaw.jpg?aspect_ratio=4:3"
        sx={imgSx}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,

            fontSize: "25px",
          }}
        >
          {cityName}
        </Typography>

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
