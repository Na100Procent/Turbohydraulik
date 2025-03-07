import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "@/app/theme/theme";
import Link from "next/link";

interface Props {
  cityName: string;
  cityUrl: string;
}

const container = {
  maxWidth: "350px",
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#f5f5f5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: 2,
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
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            width: "100%",
            maxWidth: "200px",
          }}
        >
          {cityName}
        </Typography>

        <Link href={`${cityUrl}`}>
          <IconButton
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
            }}
          >
            <ArrowOutwardIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default CityCard;
