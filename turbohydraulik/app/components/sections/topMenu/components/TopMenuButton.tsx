"use client";
import { scrollToSection } from "@/app/components/shared/helpers/scrollToSection";
import theme from "@/app/theme/theme";
import { Button } from "@mui/material";
import React from "react";

interface TopMenuButtonProps {
  title: string;
  section: string;
}

const buttonSx = {
  color: theme.palette.custom.darkGray,
  fontSize: "14px",
  fontFamily: "UniteaSans",
  fontWeight: 500,
  minWidth: "100px",
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
