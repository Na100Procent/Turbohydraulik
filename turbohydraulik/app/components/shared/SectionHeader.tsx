import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  header: string;
  headerColor: string;
}

const fontSize = {
  xl: "50px",
  lg: "50px",
  md: "40px",
  sm: "35px",
  xs: "30px",
  xxs: "30px",
};

const SectionHeader = ({ header, headerColor }: Props) => {
  const headerSx = {
    fontWeight: "700",
    zIndex: 10,
    lineHeight: fontSize,

    fontSize: fontSize,
    maxWidth: "700px",
    color: headerColor,
    textAlign: "left",
  };

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <Box
        sx={{
          width: "100px",
          height: "5px",
          backgroundColor: theme.palette.secondary.main,
          marginBottom: "20px",
        }}
      />
      <Typography variant="h2" sx={headerSx}>
        {header}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
