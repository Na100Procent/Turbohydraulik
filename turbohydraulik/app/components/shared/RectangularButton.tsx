"use client";
import theme from "@/app/theme/theme";
import { Box, Button, Typography } from "@mui/material";
import React, { JSX } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface Props {
  title: string;
  onClick?: () => void;
  icon?: JSX.Element;
  bgColor?: string;
  titleColor?: string;
  disabled?: boolean;
  noIcon?: boolean;
}

const RectangularButton = ({
  title,
  onClick,
  icon,
  bgColor,
  titleColor,
  disabled,
  noIcon,
}: Props) => {
  const buttonSx = {
    background: bgColor ? bgColor : theme.palette.custom.background,
    textTransform: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 20px",
    gap: "10px",

    "&:hover": {
      cursor: "pointer",
      background: theme.palette.custom.lightGray,
      scale: 1.05,
    },
    transition: "background-color 0.3s ease, scale 0.3s ease",
  };
  const titleSx = {
    color: titleColor ? titleColor : theme.palette.primary.main,
    fontWeight: "900",
    fontSize: {
      xl: "16px",
      lg: "15px",
      md: "14px",
      sm: "14px",
      xs: "14px",
      xxs: "14px",
    },
    fontFamily: "UniteaSans",
    textTransform: "uppercase",
    minWidth: "100px",
  };
  return (
    <Button onClick={onClick} sx={buttonSx} disabled={disabled}>
      <Typography sx={titleSx}>{title}</Typography>
      <Box mt="5px">
        {icon
          ? icon
          : !noIcon && (
              <ArrowOutwardIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  color: titleColor,
                }}
              />
            )}
      </Box>
    </Button>
  );
};

export default RectangularButton;
