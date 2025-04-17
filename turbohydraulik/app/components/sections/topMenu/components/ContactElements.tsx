import { Box, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import theme from "@/app/theme/theme";
import VerticalSeparator from "../../../shared/VerticalSeparator";
import { defaultPhoneNUmber, emailAddress } from "@/app/constants/appConstants";
import SocialMedias from "./SocialMedias";
import { convertPhoneNum } from "@/app/components/shared/helpers/convertPhoneNum";

interface Props {
  phoneNumber?: string;
}

const containerSx = {
  position: {
    md: "relative",
    xs: "fixed",
  },
  bottom: 0,
  right: 0,
  width: "100%",
};

const elementsContainer = {
  display: "flex",
  justifyContent: {
    md: "flex-end",
    xs: "center",
  },
  alignItems: "center",
  gap: {
    lg: "20px",
    md: "10px",
    sm: "8px",
    xs: "5px",
  },
  background: theme.palette.primary.main,

  width: {
    md: "fit-content",
    xs: "100%",
  },
  ml: "auto",
  borderBottomLeftRadius: {
    md: "20px",
    xs: "0px",
  },

  padding: {
    xl: "0 0 0 50px",
    lg: "0 0 0 50px",
    md: "0 0 0 30px",
    sm: "8px 0px 8px 10px",
    xs: "8px 0px 8px 10px",
  },
};

const phoneButtonSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  borderRadius: "999px",
  padding: {
    sm: "10px 20px",
    xs: "15px 25px",
  },
  transition: "background-color 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  pl: {
    sm: "50px",
    xs: "60px",
  },
  minWidth: "230px",
};
const emailButtonSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  borderRadius: "100px",
  padding: {
    sm: "10px 12px",
    xs: "15px 25px",
  },

  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  transition: "background-color 0.3s ease",
};

const phoneIconWrapperSx = {
  position: "absolute",
  left: "15px",
  top: "50%",
  transform: "translateY(-50%)",
};

const phoneIconSx = {
  color: theme.palette.secondary.main,
  fontSize: {
    sm: "30px",
    xs: "36px",
  },
  animation: "vibrateWithPause 2s infinite ease-in-out",
  transformOrigin: "center",
  "@keyframes vibrateWithPause": {
    "0%": { transform: "rotate(0deg)" },
    "5%": { transform: "rotate(-10deg)" },
    "10%": { transform: "rotate(10deg)" },
    "15%": { transform: "rotate(-6deg)" },
    "20%": { transform: "rotate(6deg)" },
    "25%": { transform: "rotate(0deg)" },
    "50%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(0deg)" },
  },
};

const iconTextSx = {
  color: theme.palette.custom.background,
  fontWeight: 500,
  fontSize: {
    xl: "18px",
    lg: "18px",
    md: "15px",
    sm: "20px",
    xs: "24px",
  },
  textAlign: "center",
};

const emailSx = {
  display: {
    sm: "flex",
    xs: "none",
  },
};

const emailIconSx = {
  color: theme.palette.secondary.main,
  width: {
    sm: "20px",
    xs: "28px",
  },
  height: {
    sm: "20px",
    xs: "28px",
  },
  mr: "10px",
};

const ContactElements = ({ phoneNumber }: Props) => {
  const phone = phoneNumber ?? defaultPhoneNUmber;
  const phoneToDisplay = convertPhoneNum(phone);

  const handlePhoneClick = () => {
    const convertedPhoneNum = convertPhoneNum(phone, true);
    window.open(`tel:${convertedPhoneNum}`);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`);
  };

  return (
    <Box sx={containerSx}>
      <Box sx={elementsContainer}>
        <Box sx={phoneButtonSx} onClick={handlePhoneClick}>
          <Box sx={phoneIconWrapperSx}>
            <LocalPhoneOutlinedIcon sx={phoneIconSx} />
          </Box>
          <Typography sx={iconTextSx}>{phoneToDisplay}</Typography>
        </Box>

        <Box sx={emailSx}>
          <VerticalSeparator />
        </Box>

        <Box sx={{ ...emailButtonSx, ...emailSx }} onClick={handleEmailClick}>
          <EmailOutlinedIcon sx={emailIconSx} />
          <Typography sx={iconTextSx}>{emailAddress}</Typography>
        </Box>

        <SocialMedias />
      </Box>
    </Box>
  );
};

export default ContactElements;
