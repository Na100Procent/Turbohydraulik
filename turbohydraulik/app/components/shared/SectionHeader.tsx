import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  subHeader: string;
  subHeaderColor: string;
  header: string;
  headerColor: string;
}

const SectionHeader = ({
  subHeader,
  subHeaderColor,
  header,
  headerColor,
}: Props) => {
  const headerSx = {
    fontWeight: "900",
    lineHeight: "60px",
    fontSize: "60px",
    color: headerColor,
  };
  const subHeaderSx = {
    color: subHeaderColor,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "15px",
  };

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <Typography sx={subHeaderSx}>{subHeader}</Typography>
      <Typography sx={headerSx}>{header}</Typography>
    </Box>
  );
};

export default SectionHeader;
