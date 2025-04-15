"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import { sectionXPadding } from "@/app/constants/styles";
import Link from "next/link";
import {
  defaultPhoneNUmber,
  policyPath,
  termsPath,
} from "@/app/constants/appConstants";
import { convertPhoneNum } from "../../shared/helpers/convertPhoneNum";

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
  maxWidth: "100vw",
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
  textAlign: "center",
  borderRadius: "15px",
};

const linkSx = {
  color: "#FFFFFF",
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
    const convertedPhoneNum = convertPhoneNum(defaultPhoneNUmber);
    window.open(`tel:${convertedPhoneNum}`);
  };
  return (
    <Box sx={container}>
      <Typography sx={textSx}>
        Copyright ©2025. Turbo Hydraulik.pl, Wszystkie prawa zastrzeżone
      </Typography>
      <Box sx={policyButtonsSx}>
        <Link
          href={policyPath}
          aria-label="strona polityki prywatności"
          style={{ textDecoration: "none" }}
        >
          <Typography sx={{ ...textSx, ...linkSx }}>
            Polityka Prywatności
          </Typography>
        </Link>
        <Box sx={verticalDivider} />
        <Link href={termsPath} style={{ textDecoration: "none" }}>
          <Typography sx={{ ...textSx, ...linkSx }}>Regulamin</Typography>
        </Link>
        <Box sx={verticalDivider} />
        <Box onClick={handlePhoneClick} aria-label="telefon kontaktowy">
          <Typography sx={{ ...textSx, ...linkSx }}>Kontakt</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Policy;
