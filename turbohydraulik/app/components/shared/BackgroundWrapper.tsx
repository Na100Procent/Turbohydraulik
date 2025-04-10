import { Box, SxProps, Theme } from "@mui/material";
import React, { JSX } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  sx?: SxProps<Theme>;
  bgImage?: string;
  bgColor?: string;
  ableOverflow?: boolean;
}

const BackgroundWrapper = ({
  children,
  sx,
  bgImage,
  bgColor,
  ableOverflow,
}: Props) => {
  const bgImageElement = `url(${bgImage}) center  /cover no-repeat`;
  const containerSx: SxProps<Theme> = {
    background: {
      xl: bgImage ? bgImageElement : bgColor,
      lg: bgImage ? bgImageElement : bgColor,
      md: bgImage ? bgImageElement : bgColor,
      sm: bgImage ? bgImageElement : bgColor,
      xs: bgColor,
      xxs: bgColor,
    },

    backgroundImage: {
      xl: bgImage ? `url(${bgImage})` : undefined,
      lg: bgImage ? `url(${bgImage})` : undefined,
      md: bgImage ? `url(${bgImage})` : undefined,
      sm: bgImage ? `url(${bgImage})` : undefined,
      xs: "none",
      xxs: "none",
    },
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: {
      xl: "center",
      lg: "center",
      md: "center",
      sm: "center",
      xs: "unset",
      xxs: "unset",
    },
    position: "relative",
    padding: {
      xl: "50px 50px",
      lg: "50px 50px",
      md: "20px 20px",
      sm: "20px 20px",
      xs: "20px 10px",
      xxs: "10px 10px",
    },
    overflowX: ableOverflow ? "hidden" : "visible",
    width: "100%",
    ...sx,
  };

  return <Box sx={containerSx}>{children}</Box>;
};

export default BackgroundWrapper;
