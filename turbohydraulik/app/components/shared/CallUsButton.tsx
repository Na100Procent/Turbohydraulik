"use client";
import React from "react";
import theme from "@/app/theme/theme";
import RectangularButton from "./RectangularButton";
import { defaultPhoneNUmber } from "@/app/constants/appConstants";
import { convertPhoneNum } from "./helpers/convertPhoneNum";

interface Props {
  bgColor?: string;
  phoneNumber?: string;
}
const CallUsButton = ({ bgColor, phoneNumber }: Props) => {
  const phone = phoneNumber ? phoneNumber : defaultPhoneNUmber;
  const phoneForDisplay = convertPhoneNum(phone);

  const handlePhoneClick = () => {
    const phoneForCall = convertPhoneNum(phone, true);
    window.open(`tel:${phoneForCall}`);
  };

  return (
    <RectangularButton
      onClick={handlePhoneClick}
      bgColor={bgColor ? bgColor : theme.palette.secondary.main}
      title={`Zadzwoń: ${phoneForDisplay}`}
      noIcon
    />
  );
};

export default CallUsButton;
