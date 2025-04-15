"use client";
import theme from "@/app/theme/theme";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { websiteData } from "@/app/data/data";

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

const HorizontalBanner = () => {
  const [start, setStart] = useState(false);

  const scrollAnimation = useSpring({
    from: { transform: "translateX(25%)" },
    to: { transform: "translateX(-35%)" },
    loop: true,
    config: { duration: 60000 },
  });
  const AnimatedBox = animated(Box);

  const positions = React.useMemo(() => {
    return Object.keys(websiteData.services).map((key) => {
      const service =
        websiteData.services[key as keyof typeof websiteData.services];
      return service.name;
    });
  }, []);

  const separator = " * ";

  const multiplePositions = [
    ...positions,
    ...positions.slice(0, positions.length / 2),
  ];

  useEffect(() => {
    setStart(true);
  }, []);
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
