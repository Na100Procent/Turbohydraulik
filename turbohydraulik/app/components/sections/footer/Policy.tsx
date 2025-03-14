"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import { sectionXPadding } from "@/app/constants/styles";
import Link from "next/link";
import {
  phoneNUmber,
  policyPath,
  termsPath,
} from "@/app/constants/appConstants";

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  backgroundColor: theme.palette.custom.darkBlue,
  color: theme.palette.custom.background,
  padding: sectionXPadding,
  gap: "20px",
};

const verticalDivider = {
  margin: "0 10px",
  borderLeft: "2px solid #FFFFFF",
  height: "15px",
};

const textSx = {
  padding: "20px",
  fontSize: "12px",
  fontWeight: "600",
  fontFamily: "UniteaSans",
  textAlign: "center",
  borderRadius: "15px",
};

const linkSx = {
  "&:hover": {
    backgroundColor: "rgba(243, 239, 239, 0.1)",
    cursor: "pointer",
  },
  transition: "background 0.3s ease-in-out",
};

const policyButtonsSx = {
  display: "flex",
  alignItems: "center",
  mb: {
    xl: "0",
    lg: "0",
    md: "0",
    sm: "60px",
    xs: "70px",
    xxs: "70px",
  },
};

const Policy: React.FC = () => {
  const handlePhoneClick = () => {
    window.open(`tel:${phoneNUmber}`);
  };
  return (
    <Box sx={container}>
      <Typography sx={{ ...textSx, opacity: 0.5 }}>
        Copyright ©2025. Turbo Hydraulik.pl, Wszystkie prawa zastrzeżone
      </Typography>
      <Box sx={policyButtonsSx}>
        <Link href={policyPath}>
          <Typography sx={{ ...textSx, ...linkSx }}>
            Polityka Prywatności
          </Typography>
        </Link>
        <Box sx={verticalDivider} />
        <Link href={termsPath}>
          <Typography sx={{ ...textSx, ...linkSx }}>Regulamin</Typography>
        </Link>
        <Box sx={verticalDivider} />
        <Box onClick={handlePhoneClick}>
          <Typography sx={{ ...textSx, ...linkSx }}>Kontakt</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Policy;
