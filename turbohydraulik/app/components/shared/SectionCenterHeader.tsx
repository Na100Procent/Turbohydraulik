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
    fontWeight: "900",
    fontSize: "40px",
    color: headerColor,
    maxWidth: "400px",
    textAlign: "center",
    lineHeight: "40px",
  };
  const topHeaderSx = {
    color: topHeaderColor as string,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "15px",
  };

  const bottomHeaderSx = {
    fontWeight: "900",
    fontSize: "15px",
    color: headerColor,
    marginTop: "20px",
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
