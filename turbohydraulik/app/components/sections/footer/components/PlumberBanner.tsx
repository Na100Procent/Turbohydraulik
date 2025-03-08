import { Box, Typography } from "@mui/material";
import React from "react";
import CallUsButton from "@/app/components/shared/CallUsButton";
import theme from "@/app/theme/theme";
import Plumber from "@/public/assets/images/Images";

const container = {
  display: "flex",
  justifyContent: "left",
  borderRadius: "10px",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
  position: "absolute",
  top: "-200px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "30px 0px 60px 50px",
  zIndex: 10,
  height: "300px",
  width: "90%",
  maxWidth: "700px",
};
const headerSx = {
  fontWeight: "700",
  fontSize: "40px",
  color: theme.palette.primary.main,
  maxWidth: "400px",
  textAlign: "left",
  lineHeight: "50px",
  fontFamily: "UniteaSans",
  "@media (max-width: 768px)": {
    fontSize: "30px",
    lineHeight: "40px",
  },
};
const PlumberBanner = () => {
  return (
    <Box sx={container}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}
        gap="20px"
        zIndex={1}
      >
        <Typography sx={headerSx}>
          Share your opinion about Turbo Hydraulik
        </Typography>
        <CallUsButton bgColor={theme.palette.custom.background} />
      </Box>
      <Box position={"absolute"} bottom={"-12px"} right={"-10px"} zIndex={0}>
        <Plumber />
      </Box>
    </Box>
  );
};

export default PlumberBanner;
