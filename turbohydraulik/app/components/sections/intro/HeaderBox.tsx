import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  slug?: string;
  subHeaderContent?: string;
}

const fontSize = {
  xl: "60px",
  lg: "60px",
  md: "50px",
  sm: "50px",
  xs: "50px",
  xxs: "40px",
};
const container = {
  maxWidth: "400px",
};
const headerSx = {
  fontWeight: "600",
  fontFamily: "UniteaSans",
  lineHeight: fontSize,
  fontSize: fontSize,
};
const subHeader = {
  color: theme.palette.custom.background,
  fontWeight: 500,
  letterSpacing: "1px",
};

const HeaderBox = ({ slug, subHeaderContent }: Props) => {
  return (
    <Box sx={container}>
      <Box>
        <Box color={theme.palette.custom.background}>
          <Typography sx={headerSx}> Turbo </Typography>
        </Box>
        <Typography
          mb="20px"
          sx={{ color: theme.palette.secondary.main, ...headerSx }}
        >
          Hydraulik {slug}
        </Typography>
      </Box>
      <p style={subHeader}>{subHeaderContent}</p>
    </Box>
  );
};

export default HeaderBox;
