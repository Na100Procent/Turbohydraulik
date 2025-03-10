import { Box } from "@mui/material";
import React, { JSX } from "react";

interface Props {
  bgImage: string;
  children?: JSX.Element[];
}

const MosaicElement = ({ bgImage, children }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        background: `url(${bgImage}) center /cover no-repeat`,
        borderRadius: "10px",
        overflow: "hidden",
        mt: "20px",
      }}
    >
      {children ? children : <Box sx={{ minHeight: "300px" }}></Box>}
    </Box>
  );
};

export default MosaicElement;
