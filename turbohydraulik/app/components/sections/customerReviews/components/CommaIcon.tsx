import { CommasIcon } from "@/public/assets/icons/icons";
import { Box } from "@mui/material";
import React from "react";

const CommaIcon = () => {
  return (
    <Box sx={{ position: "absolute", top: "100px", right: "100px", zIndex: 0 }}>
      <CommasIcon />
    </Box>
  );
};

export default CommaIcon;
