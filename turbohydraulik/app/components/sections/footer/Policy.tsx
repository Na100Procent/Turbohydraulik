import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import { sectionXPadding } from "@/app/constants/styles";

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  backgroundColor: theme.palette.custom.darkBlue,
  color: theme.palette.custom.background,
  padding: sectionXPadding,
  gap: "20px",
};

const verticalDivider = {
  margin: "0 10px",
  borderLeft: "2px solid #FFFFFF",
  height: "15px",
};

const textSx = {
  padding: "20px",
  fontSize: "12px",
  fontWeight: "600",
  fontFamily: "UniteaSans",
  textAlign: "center",
};

const Policy: React.FC = () => {
  return (
    <Box sx={container}>
      <Typography sx={{ ...textSx, opacity: 0.5 }}>
        Copyright ©2025. Turbo Hydraulik.pl, All right reserved
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography sx={textSx}>Privacy Policy</Typography>
        <Box sx={verticalDivider} />
        <Typography sx={textSx}>Terms of Service</Typography>
        <Box sx={verticalDivider} />
        <Typography sx={textSx}>Contact Us</Typography>
      </Box>
    </Box>
  );
};

export default Policy;
