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
  ariaLabel?: string;
}

const RectangularButton = ({
  title,
  onClick,
  icon,
  bgColor,
  titleColor,
  disabled,
  noIcon,
  ariaLabel,
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
    },
    transition: "background-color 0.3s ease",
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

    textTransform: "uppercase",
    minWidth: "100px",
  };
  return (
    <Button
      onClick={onClick}
      sx={buttonSx}
      disabled={disabled}
      aria-label={ariaLabel ? ariaLabel : title}
    >
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
