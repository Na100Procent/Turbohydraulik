import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

const container = {
  maxWidth: "400px",
};
const headerSx = {
  fontWeight: "600",
  fontFamily: "UniteaSans",
  lineHeight: "65px",
  fontSize: "60px",
};
const subHeader = {
  color: theme.palette.custom.background,
  fontWeight: 500,
  letterSpacing: "1px",
};
const HeaderBox = () => {
  return (
    <Box sx={container}>
      <Box>
        <Box
          sx={{
            color: theme.palette.custom.background,
          }}
        >
          <Typography sx={headerSx}> Reliable </Typography>
          <Typography sx={headerSx}>& Efficient</Typography>
        </Box>
        <Typography sx={{ color: theme.palette.secondary.main, ...headerSx }}>
          Plumbing.
        </Typography>
      </Box>
      <p style={subHeader}>
        Repair, installation and plumbing service – quickly, reliably and
        professionally.
      </p>
    </Box>
  );
};

export default HeaderBox;
