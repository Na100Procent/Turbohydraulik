"use client";
import React from "react";
import { sectionIds } from "@/app/constants/appConstants";
import RectangularButton from "./RectangularButton";
import theme from "@/app/theme/theme";
import { scrollToSection } from "./helpers/scrollToSection";

interface Props {
  onClick?: () => void;
}
const ContactUsButton = ({ onClick }: Props) => {
  const handleContactBtnClick = () => {
    scrollToSection(sectionIds.contact);
    if (onClick) onClick();
  };
  return (
    <RectangularButton
      onClick={handleContactBtnClick}
      title="Kontakt"
      bgColor={theme.palette.secondary.main}
    />
  );
};

export default ContactUsButton;
