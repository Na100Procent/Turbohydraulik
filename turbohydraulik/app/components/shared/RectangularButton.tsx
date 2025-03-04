import theme from "@/app/theme/theme";
import { Box, Button, Typography } from "@mui/material";
import React, { JSX } from "react";

interface Props {
  title: string;
  onClick?: () => void;
  icon?: JSX.Element;
  bgColor?: string;
}

const titleSx = {
  color: theme.palette.primary.main,
  fontWeight: "600",
};
const RectangularButton = ({ title, onClick, icon, bgColor }: Props) => {
  const buttonSx = {
    background: bgColor
      ? theme.palette.secondary.main
      : theme.palette.custom.background,
    textTransform: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
    gap: "10px",
  };
  return (
    <Button onClick={onClick} sx={buttonSx}>
      <Typography sx={titleSx}>{title}</Typography>
      <Box mt="5px">{icon}</Box>
    </Button>
  );
};

export default RectangularButton;
