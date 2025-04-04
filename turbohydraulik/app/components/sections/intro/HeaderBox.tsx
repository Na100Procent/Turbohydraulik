import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  hero_h1: string;
  hero_h2: string;
  hero_text: string;
}

const fontSize = {
  xl: "60px",
  lg: "60px",
  md: "50px",
  sm: "50px",
  xs: "40px",
  xxs: "35px",
};

const headerSx = {
  fontWeight: "600",
  fontFamily: "UniteaSans",
  lineHeight: fontSize,
  fontSize: fontSize,
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  flexDirection: "column",
};
const subHeaderSX = {
  color: theme.palette.custom.background,
  fontWeight: 500,
  fontFamily: "UniteaSans",
  letterSpacing: "1px",
  mt: "10px",
  mb: "20px",
};

const HeaderBox = ({ hero_h1, hero_h2, hero_text }: Props) => {
  const headerWords = hero_h1.split(" ");
  const headerPart1 = headerWords.slice(0, -1).join(" ");
  const headerPart2 = headerWords.slice(-1).join(" ");

  return (
    <>
      <Typography variant="h1" sx={headerSx}>
        <Box component="p" sx={{ color: theme.palette.custom.background }}>
          {headerPart1}
        </Box>
        <Box component="p" sx={{ color: theme.palette.secondary.main }}>
          {headerPart2}
        </Box>
      </Typography>
      <Typography sx={subHeaderSX} variant="h2" fontSize={"30px"}>
        {hero_h2}
      </Typography>
      <p style={subHeaderSX}>{hero_text}</p>
    </>
  );
};

export default HeaderBox;
