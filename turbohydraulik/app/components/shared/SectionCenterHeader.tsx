import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  topHeader?: string;
  topHeaderColor?: string;
  header: string;
  headerColor?: string;
  bottomHeader?: string;
}

const containerSx = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};
const fontSize = {
  xl: "50px",
  lg: "50px",
  md: "40px",
  sm: "40px",
  xs: "40px",
  xxs: "30px",
};

const bottomHeaderSx = {
  fontWeight: "500",
  fontSize: "15px",
  color: "#565656",
  marginTop: "20px",
  fontFamily: "UniteaSans",
  textAlign: "center",
};

const SectionCenterHeader = ({
  topHeader,
  bottomHeader,
  topHeaderColor,
  header,
  headerColor,
}: Props) => {
  const headerSx = {
    fontWeight: "700",
    fontSize: fontSize,
    color: headerColor ? headerColor : theme.palette.primary.main,
    maxWidth: "750px",
    textAlign: "center",
    lineHeight: fontSize,
    fontFamily: "UniteaSans",
  };
  const topHeaderSx = {
    color: topHeaderColor as string,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "15px",
  };

  return (
    <Box sx={containerSx}>
      {topHeader && <Typography sx={topHeaderSx}>{topHeader}</Typography>}
      <Typography sx={headerSx}>{header}</Typography>
      {bottomHeader && (
        <Typography sx={bottomHeaderSx}>{bottomHeader}</Typography>
      )}
    </Box>
  );
};

export default SectionCenterHeader;
