import theme from "@/app/theme/theme";
import { Button } from "@mui/material";
import React from "react";

interface TopMenuButtonProps {
  title: string;
}

const buttonSx = {
  color: theme.palette.custom.darkGray,
  fontSize: "14px",
  fontFamily: "UniteaSans",
  fontWeight: 500,
};
const TopMenuButton = ({ title }: TopMenuButtonProps) => {
  return <Button sx={buttonSx}>{title}</Button>;
};

export default TopMenuButton;
