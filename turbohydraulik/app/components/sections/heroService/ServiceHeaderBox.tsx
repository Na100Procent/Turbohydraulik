import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  header: string;
  subHeader: string;
  text: string;
}

const fontSize = {
  xl: "60px",
  lg: "60px",
  md: "50px",
  sm: "50px",
  xs: "50px",
  xxs: "40px",
};

const headerSx = {
  fontWeight: "600",
  fontFamily: "UniteaSans",
  lineHeight: fontSize,
  fontSize: fontSize,
};
const subHeaderSX = {
  color: theme.palette.custom.background,
  fontWeight: 500,
  fontFamily: "UniteaSans",
  letterSpacing: "1px",
  mt: "-10px",
  mb: "20px",
};

const ServiceHeaderBox = ({ header, subHeader, text }: Props) => {
  const headerWords = header.split(" ");
  const headerPart1 = headerWords.slice(0, -1).join(" ");
  const headerPart2 = headerWords.slice(-1).join(" ");

  return (
    <Box>
      <Box>
        <Box color={theme.palette.custom.background}>
          <Typography variant="h1" sx={headerSx}>
            {headerPart1}
          </Typography>
        </Box>
        <Typography
          variant="h2"
          mb="20px"
          sx={{ color: theme.palette.secondary.main, ...headerSx }}
        >
          {headerPart2}
        </Typography>
      </Box>
      <Typography sx={subHeaderSX} variant="h5">
        {subHeader}
      </Typography>
      <p style={subHeaderSX}>{text}</p>
    </Box>
  );
};

export default ServiceHeaderBox;
