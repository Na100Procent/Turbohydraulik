import React, { JSX } from "react";
import { Box } from "@mui/material";

interface Props {
  elements: JSX.Element[];
}

const imgContainer = {
  display: {
    xl: "grid",
    lg: "grid",
    md: "grid",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  gridTemplateColumns: "1fr 1.5fr",

  gap: 2,
  width: "100%",
  maxWidth: "1200px",
};

const MosaicGrid = ({ elements }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ ...imgContainer, gridTemplateColumns: "1.5fr 1fr" }}>
        {elements[0]} {elements[1]}
      </Box>
      <Box sx={imgContainer}>
        {elements[2]} {elements[3]}
      </Box>
    </Box>
  );
};

export default MosaicGrid;
