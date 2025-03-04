import theme from "@/app/theme/theme";
import { Box, SxProps, Theme } from "@mui/material";
import React, { JSX } from "react";

interface Props {
  children: JSX.Element;
  sx?: SxProps<Theme>;
  bgImage?: string;
}

const BackgroundWrapper = ({ children, sx, bgImage }: Props) => {
  const containerSx: SxProps<Theme> = {
    background: bgImage
      ? `url(${bgImage}) center  /cover no-repeat`
      : theme.palette.custom.background,
    backgroundPosition: "10% 20%",
    position: "relative",
    padding: {
      xl: "50px 50px",
      lg: "50px 50px",
      md: "20px 20px",
      sm: "20px 20px",
      xs: "20px 10px",
      xxs: "10px 10px",
    },
    width: "100%",
    ...sx,
  };

  return <Box sx={containerSx}>{children}</Box>;
};

export default BackgroundWrapper;
