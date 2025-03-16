"use client";
import theme from "@/app/theme/theme";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const styles = {
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  width: "100%",
  padding: "5px 0",
  textAlign: "center",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  WebkitTransform: "translateZ(0)",
  willChange: "transform",
};

const separatorSx = {
  marginLeft: "20px",
  marginRight: "20px",
  fontSize: "30px",
  marginTop: "10px",
};
const contentSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const positions = [
  "Odkurzanie i czyszczenie rur",
  "Silikonowanie i uszczelnianie",
  "Serwis, instalacja i wymiana baterii",
  "Usługi hydrauliczne",
];
const separator = " * ";

const HorizontalBanner = () => {
  const [start, setStart] = useState(false);

  const scrollAnimation = useSpring({
    from: { transform: "translateX(25%)" },
    to: { transform: "translateX(-35%)" },
    loop: true,
    config: { duration: 35000 },
  });
  const AnimatedBox = animated(Box);

  const multiplePositions = [
    ...positions,
    ...positions,
    ...positions,
    ...positions,
    ...positions,
    ...positions,
  ];

  useEffect(() => {
    setStart(true);
  });
  return (
    <Box sx={styles}>
      <AnimatedBox
        key={start.toString()}
        style={scrollAnimation}
        sx={contentSx}
      >
        {multiplePositions.map((position, index) => (
          <Box key={index} sx={contentSx}>
            <span>{position}</span>
            <span style={separatorSx}>{separator}</span>
          </Box>
        ))}
      </AnimatedBox>
    </Box>
  );
};

export default HorizontalBanner;
