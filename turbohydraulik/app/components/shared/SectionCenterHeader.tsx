import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  topHeader?: string;
  topHeaderColor?: string;
  header: string;
  headerColor: string;
  bottomHeader?: string;
}

const SectionCenterHeader = ({
  topHeader,
  bottomHeader,
  topHeaderColor,
  header,
  headerColor,
}: Props) => {
  const headerSx = {
    fontWeight: "700",
    fontSize: "50px",
    color: headerColor,
    maxWidth: "750px",
    textAlign: "center",
    lineHeight: "50px",
    fontFamily: "UniteaSans",
  };
  const topHeaderSx = {
    color: topHeaderColor as string,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "15px",
  };

  const bottomHeaderSx = {
    fontWeight: "500",
    fontSize: "15px",
    color: "rgb(68, 68, 68)",
    marginTop: "20px",
    fontFamily: "UniteaSans",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {topHeader && <Typography sx={topHeaderSx}>{topHeader}</Typography>}
      <Typography sx={headerSx}>{header}</Typography>
      {bottomHeader && (
        <Typography sx={bottomHeaderSx}>{bottomHeader}</Typography>
      )}
    </Box>
  );
};

export default SectionCenterHeader;
