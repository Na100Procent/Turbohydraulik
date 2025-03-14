"use client";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import theme from "@/app/theme/theme";
import RectangularButton from "./RectangularButton";
import { phoneNUmber } from "@/app/constants/appConstants";

interface Props {
  bgColor?: string;
}
const CallUsButton = ({ bgColor }: Props) => {
  const handlePhoneClick = () => {
    window.open(`tel:${phoneNUmber}`);
  };
  return (
    <RectangularButton
      onClick={handlePhoneClick}
      bgColor={bgColor ? bgColor : theme.palette.secondary.main}
      title={`Zadzwoń: ${phoneNUmber}`}
      icon={
        <PhoneIcon
          sx={{
            width: "20px",
            height: "20px",
            color: theme.palette.primary.main,
          }}
        />
      }
    />
  );
};

export default CallUsButton;
