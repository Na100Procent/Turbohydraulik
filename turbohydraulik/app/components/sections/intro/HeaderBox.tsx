import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  slug?: string;
  subHeaderContent?: string;
}
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

const HeaderBox = ({ slug, subHeaderContent }: Props) => {
  return (
    <Box sx={container}>
      <Box>
        <Box
          sx={{
            color: theme.palette.custom.background,
          }}
        >
          <Typography sx={headerSx}> Turbo </Typography>
        </Box>
        <Typography sx={{ color: theme.palette.secondary.main, ...headerSx }}>
          Hydraulik {slug}
        </Typography>
      </Box>
      <p style={subHeader}>{subHeaderContent}</p>
    </Box>
  );
};

export default HeaderBox;
