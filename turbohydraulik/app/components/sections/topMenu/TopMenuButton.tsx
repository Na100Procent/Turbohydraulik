"use client";
import theme from "@/app/theme/theme";
import { Button } from "@mui/material";
import React from "react";
import { scrollToSection } from "../../shared/helpers/scrollToSection";

interface TopMenuButtonProps {
  title: string;
  section: string;
}

const buttonSx = {
  color: theme.palette.custom.darkGray,
  fontSize: "14px",
  fontFamily: "UniteaSans",
  fontWeight: 500,
};
const TopMenuButton = ({ title, section }: TopMenuButtonProps) => {
  const handleClick = () => {
    scrollToSection(section);
  };
  return (
    <Button sx={buttonSx} onClick={handleClick}>
      {title}
    </Button>
  );
};

export default TopMenuButton;
