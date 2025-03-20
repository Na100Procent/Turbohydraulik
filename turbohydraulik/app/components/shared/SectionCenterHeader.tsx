import { sectionXPadding } from "@/app/constants/styles";
import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  topHeader?: string;
  topHeaderColor?: string;
  header: string;
  headerColor?: string;
  bottomHeader?: string;
  bottomHeaderColor?: string;
}

const containerSx = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: sectionXPadding,
};
const fontSize = {
  xl: "50px",
  lg: "50px",
  md: "40px",
  sm: "40px",
  xs: "40px",
  xxs: "30px",
};

const SectionCenterHeader = ({
  topHeader,
  bottomHeader,
  topHeaderColor,
  header,
  headerColor,
  bottomHeaderColor,
}: Props) => {
  const headerSx = {
    fontWeight: "700",
    fontSize: fontSize,
    color: headerColor ? headerColor : theme.palette.primary.main,
    maxWidth: "750px",
    textAlign: {
      xl: "center",
      lg: "center",
      md: "center",
      sm: "left",
      xs: "left",
      xxs: "left",
    },
    lineHeight: fontSize,
    fontFamily: "UniteaSans",
  };
  const topHeaderSx = {
    color: topHeaderColor
      ? (topHeaderColor as string)
      : theme.palette.secondary.main,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: {
      xl: "15px",
      lg: "15px",
      md: "13px",
      sm: "12px",
      xs: "12px",
      xxs: "12px",
    },
    textAlign: {
      xl: "center",
      lg: "center",
      md: "center",
      sm: "center",
      xs: "left",
      xxs: "left",
    },
    width: "100%",
  };

  const bottomHeaderSx = {
    fontWeight: "500",
    fontSize: "15px",
    color: bottomHeaderColor ? bottomHeaderColor : "#565656",
    marginTop: "20px",
    fontFamily: "UniteaSans",
    textAlign: {
      xl: "center",
      lg: "center",
      md: "center",
      sm: "left",
      xs: "left",
      xxs: "left",
    },
  };

  return (
    <Box sx={containerSx}>
      {topHeader && <Typography sx={topHeaderSx}>{topHeader}</Typography>}
      <Typography variant="h2" sx={headerSx}>
        {header}
      </Typography>
      {bottomHeader && (
        <Typography sx={bottomHeaderSx}>{bottomHeader}</Typography>
      )}
    </Box>
  );
};

export default SectionCenterHeader;
