import React from "react";
import { Box } from "@mui/material";
import RectangularButton from "../../shared/RectangularButton";
import theme from "@/app/theme/theme";
import MosaicElement from "./MocaicElement";

const images = [
  "https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11",
  "https://github.com/user-attachments/assets/3d7c0dba-1f19-4d53-b7c2-15743f2b7408",
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d",
  "https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11",
];

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

const MosaicGrid = () => {
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
        <MosaicElement bgImage={images[0]} />
        <MosaicElement bgImage={images[1]} />
      </Box>
      <Box sx={imgContainer}>
        <MosaicElement bgImage={images[2]} />
        <MosaicElement bgImage={images[3]} />
      </Box>
      <Box mt="30px">
        <RectangularButton
          title="VIEW ALL PROJECTS"
          bgColor={theme.palette.secondary.main}
        />
      </Box>
    </Box>
  );
};

export default MosaicGrid;
