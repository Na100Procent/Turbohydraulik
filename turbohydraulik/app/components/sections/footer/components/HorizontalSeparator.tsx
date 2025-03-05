import { Box } from "@mui/material";
import React from "react";

const HorizontalSeparator = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box
        width="85%"
        borderTop="1px solid white"
        padding="10px 0"
        sx={{ opacity: 0.4 }}
      />
    </Box>
  );
};

export default HorizontalSeparator;
