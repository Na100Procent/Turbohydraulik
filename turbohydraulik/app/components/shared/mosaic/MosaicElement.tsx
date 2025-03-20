import { Box } from "@mui/material";
import Image from "next/image";
import React, { JSX } from "react";

interface Props {
  bgImage: string;
  alt?: string;
  children?: JSX.Element[];
}

const MosaicElement = ({ bgImage, alt, children }: Props) => {
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
      <Image
        src={bgImage}
        alt={alt || ""}
        width="0"
        height="0"
        style={{
          position: "absolute",
          visibility: "hidden",
        }}
      />
      {children ? children : <Box sx={{ minHeight: "300px" }} />}
    </Box>
  );
};

export default MosaicElement;
