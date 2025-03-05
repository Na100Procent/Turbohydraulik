import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import RectangularButton from "../../shared/RectangularButton";
import theme from "@/app/theme/theme";

const images = [
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d",
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d",
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d",
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d",
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d",
];

const MosaicGrid = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Image src={images[0]} alt="image" width={380} height={450} />
        <Image src={images[0]} alt="image" width={230} height={200} />
        <Image src={images[0]} alt="image" width={230} height={200} />
      </Box>
      <Box display="flex" gap={3}>
        <Image
          src={images[0]}
          alt="image"
          width={300}
          height={250}
          style={{ marginTop: "20px" }}
        />
        <Image
          src={images[0]}
          alt="image"
          width={450}
          height={350}
          style={{ marginTop: "-220px", marginRight: "-40px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          position: "relative",
          top: "-100px",
          left: "250px",
        }}
      >
        <RectangularButton
          title="VIEW ALL PROJECTS"
          bgColor={theme.palette.secondary.main}
        />
        <RectangularButton
          title="VIEW ALL SERVICES"
          bgColor={theme.palette.primary.main}
          titleColor={theme.palette.custom.background}
        />
      </Box>
    </Box>
  );
};

export default MosaicGrid;
