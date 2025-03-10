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
}

const RectangularButton = ({
  title,
  onClick,
  icon,
  bgColor,
  titleColor,
}: Props) => {
  const buttonSx = {
    background: bgColor ? bgColor : theme.palette.custom.background,
    textTransform: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
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
      xl: "13px",
      lg: "13px",
      md: "12px",
      sm: "12px",
      xs: "11px",
      xxs: "10px",
    },
    fontFamily: "UniteaSans",
    textTransform: "uppercase",
    minWidth: "100px",
  };
  return (
    <Button onClick={onClick} sx={buttonSx}>
      <Typography sx={titleSx}>{title}</Typography>
      <Box mt="5px">
        {icon ? (
          icon
        ) : (
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
