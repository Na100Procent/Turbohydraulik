import { sectionXPadding } from "@/app/constants/styles";
import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  header: string;
  headerColor?: string;
  bottomHeader?: string;
  bottomHeaderColor?: string;
}

const separatorContainer = {
  display: "flex",
  justifyContent: {
    xl: "center",
    lg: "center",
    md: "center",
    sm: "left",
    xs: "left",
    xxs: "left",
  },
  alignItems: "center",
  width: "100%",
  marginBottom: "20px",
};
const separatorSx = {
  width: "100px",
  height: "5px",
  backgroundColor: theme.palette.secondary.main,
};
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
  bottomHeader,
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
      <Box sx={separatorContainer}>
        <Box sx={separatorSx} />
      </Box>
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
