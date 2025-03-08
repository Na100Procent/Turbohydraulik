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
    minWidth: "200px",
  };
  const titleSx = {
    color: titleColor ? titleColor : theme.palette.primary.main,
    fontWeight: "900",
    fontSize: {
      xl: "14px",
      lg: "14px",
      md: "13px",
      sm: "12px",
      xs: "12px",
      xxs: "11px",
    },
    fontFamily: "UniteaSans",
    textTransform: "uppercase",
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
