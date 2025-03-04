import { Box } from "@mui/material";
import React, { JSX } from "react";

interface Props {
  children: JSX.Element;
}

const SectionPaddingWrapper = ({ children }: Props) => {
  return <Box sx={{ padding: "50px 0" }}>{children}</Box>;
};

export default SectionPaddingWrapper;
