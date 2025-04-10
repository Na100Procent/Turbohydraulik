import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  header: string;
  hero_h2: string;
  hero_text: string;
}

const fontSize = {
  xl: "60px",
  lg: "60px",
  md: "50px",
  sm: "50px",
  xs: "45px",
  xxs: "40px",
};

const headerSx = {
  fontWeight: "600",

  lineHeight: fontSize,

  fontSize: fontSize,
};
const subHeaderSX = {
  color: theme.palette.custom.background,
  fontWeight: 500,

  letterSpacing: "1px",
  mt: "10px",
  mb: "20px",
};

const ServiceHeaderBox = ({ header, hero_h2, hero_text }: Props) => {
  const headerWords = header.split(" ");
  const headerPart1 = headerWords.slice(0, -1).join(" ");
  const headerPart2 = headerWords.slice(-1).join(" ");

  return (
    <>
      <Typography variant="h1" sx={headerSx}>
        <Box component="span" sx={{ color: theme.palette.custom.background }}>
          {headerPart1}{" "}
        </Box>
        <Box component="span" sx={{ color: theme.palette.secondary.main }}>
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

export default ServiceHeaderBox;
