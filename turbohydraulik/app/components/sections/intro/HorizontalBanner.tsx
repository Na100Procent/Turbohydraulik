import theme from "@/app/theme/theme";
import { Box } from "@mui/material";
import React from "react";

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
  const positions = [
    "Odkurzanie i czyszczenie rur",
    "Silikonowanie i uszczelnianie",
    "Serwis, instalacja i wymiana baterii",
    "Usługi hydrauliczne",
  ];
  const separator = " * ";

  return (
    <Box sx={styles}>
      {[...positions, ...positions, ...positions].map((position, index) => (
        <Box key={index} sx={contentSx}>
          <span>{position}</span>
          <span style={separatorSx}>{separator}</span>
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalBanner;
