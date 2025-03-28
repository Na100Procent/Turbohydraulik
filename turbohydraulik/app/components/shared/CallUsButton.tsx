"use client";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
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
  const convertedPhoneNum = convertPhoneNum(phone);

  const handlePhoneClick = () => {
    window.open(`tel:${convertedPhoneNum}`);
  };

  return (
    <RectangularButton
      onClick={handlePhoneClick}
      bgColor={bgColor ? bgColor : theme.palette.secondary.main}
      title={`Zadzwoń: ${convertedPhoneNum}`}
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
