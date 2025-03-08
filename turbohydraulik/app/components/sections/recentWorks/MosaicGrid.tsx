import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import RectangularButton from "../../shared/RectangularButton";
import theme from "@/app/theme/theme";

const images = [
  "https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11", // Top Left (Wider)
  "https://github.com/user-attachments/assets/3d7c0dba-1f19-4d53-b7c2-15743f2b7408", // Top Right (Narrower)
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d", // Bottom Left (Narrower)
  "https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11", // Bottom Right (Wider)
];

interface Props {
  src: string;
}
const MosaicImage = ({ src }: Props) => {
  return (
    <Image src={src} alt="project image" layout="fill" objectFit="cover" />
  );
};

const imgContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 1.5fr",
  gridTemplateRows: "250px 250px",
  gap: 3,
  width: "100%",
  maxWidth: "700px",
  maxHeight: "260px",
};

const singleImg = {
  position: "relative",
  gridColumn: "span 1",
  height: "250px",
  borderRadius: "8px",
  overflow: "hidden",
};
const MosaicGrid = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Box sx={{ ...imgContainer, gridTemplateColumns: "1.5fr 1fr" }}>
        <Box sx={singleImg}>
          <MosaicImage src={images[0]} />
        </Box>
        <Box sx={singleImg}>
          <MosaicImage src={images[1]} />
        </Box>
      </Box>
      <Box sx={imgContainer}>
        <Box sx={singleImg}>
          <MosaicImage src={images[2]} />
        </Box>
        <Box sx={singleImg}>
          <MosaicImage src={images[3]} />
        </Box>
      </Box>
      <Box>
        <RectangularButton
          title="VIEW ALL PROJECTS"
          bgColor={theme.palette.secondary.main}
        />
      </Box>
    </Box>
  );
};

export default MosaicGrid;
