import { Box, SxProps, Theme } from "@mui/material";
import React from "react";

interface Props {
  addSx?: SxProps<Theme>;
}
const HorizontalSeparator = ({ addSx }: Props) => {
  const separatorSx = {
    width: "95%",
    borderTop: "1px solid white",
    padding: "10px 0",
    opacity: 0.3,
  };
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box sx={{ ...separatorSx, ...(addSx && { ...addSx }) }} />
    </Box>
  );
};

export default HorizontalSeparator;
