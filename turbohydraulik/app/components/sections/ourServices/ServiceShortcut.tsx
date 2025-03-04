import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "@/app/theme/theme";

interface Props {
  title: string;
  imageUrl: string;
}

const ServiceCard = ({ title, imageUrl }: Props) => {
  return (
    <Box
      sx={{
        minWidth: "250px",
        minHeight: "400px",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: 2,
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          marginTop: "10px",
          width: "90%",
          height: "65%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
        >
          {title}
        </Typography>

        <IconButton
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
          }}
        >
          <ArrowOutwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ServiceCard;
