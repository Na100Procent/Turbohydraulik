import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  subHeader: string;
  subHeaderColor: string;
  header: string;
  headerColor: string;
}

const fontSize = {
  xl: "50px",
  lg: "50px",
  md: "40px",
  sm: "35px",
  xs: "30px",
  xxs: "30px",
};

const SectionHeader = ({
  subHeader,
  subHeaderColor,
  header,
  headerColor,
}: Props) => {
  const headerSx = {
    fontWeight: "700",
    zIndex: 10,
    lineHeight: fontSize,
    fontFamily: "UniteaSans",
    fontSize: fontSize,
    maxWidth: "700px",
    color: headerColor,
  };
  const subHeaderSx = {
    color: subHeaderColor,
    fontWeight: "600",
    zIndex: 10,
    fontFamily: "UniteaSans",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "15px",
    marginBottom: "10px",
  };

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <Typography variant="h3" sx={subHeaderSx}>
        {subHeader}
      </Typography>
      <Typography variant="h2" sx={headerSx}>
        {header}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
