import { Box, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import theme from "@/app/theme/theme";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VerticalSeparator from "../../../shared/VerticalSeparator";
import { TopMenuOrnament } from "@/public/assets/icons/icons";
import { defaultPhoneNUmber, email } from "@/app/constants/appConstants";
import SocialMedias from "./SocialMedias";

interface Props {
  phoneNumber?: string;
}
const containerSx = {
  position: {
    md: "relative",
    sm: "fixed",
    xs: "fixed",
    xxs: "fixed",
  },
  bottom: 0,
  right: 0,
};

const elementsContainer = {
  display: "flex",
  justifyContent: {
    sm: "right",
    xs: "center",
    xxs: "center",
  },
  alignItems: "center",
  gap: {
    lg: "20px",
    md: "10px",
    sm: "8px",
    xs: "5px",
    xxs: "5px",
  },
};
const contactTitleSx = {
  color: theme.palette.custom.background,
  fontFamily: "UniteaSans",
  fontSize: "14px",
  minWidth: "100px",

  fontWeight: 500,
};

const contactElement = {
  display: "flex",
  alignItems: "center",
  zIndex: 3,
  padding: "10px",
  gap: "6px",
  borderRadius: "10px",
  transition: "background-color 0.3s ease, scale 0.3s ease",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.1)",
    scale: 1.05,
  },
};

const ornamentSx = {
  position: "absolute",
  top: {
    md: "-60px",
    sm: "-10px",
    xs: "-10px",
  },
  right: {
    xl: "-900px",
    lg: "-1250px",
    md: "-1500px",
    sm: "-10px",
    xs: "-10px",
  },
  zIndex: 1,
};

const emailSx = {
  display: {
    sm: "flex",
    xs: "none",
    xxs: "none",
  },
};

const phoneSx = {
  scale: {
    sm: "1",
    xs: "2",
    xxs: "2",
  },
  marginRight: {
    sm: "0",
    xs: "31vw",
    xxs: "28vw",
  },

  padding: {
    sm: "10px",
    xs: "20px",
    xxs: "20px",
  },
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.1)",
    scale: {
      sm: "1.05",
      xs: "2.02",
      xxs: "2.02",
    },
  },
};

const contactIconSx = {
  width: "20px",
  height: "20px",
  mt: "-4px",
  color: theme.palette.secondary.main,
};

const ContactElements = ({ phoneNumber }: Props) => {
  const phone = phoneNumber ? phoneNumber : defaultPhoneNUmber;
  const handlePhoneClick = () => {
    window.open(`tel:${phone}`);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`);
  };
  return (
    <Box sx={containerSx}>
      <Box sx={ornamentSx}>
        <TopMenuOrnament />
      </Box>
      <Box sx={elementsContainer}>
        <Box sx={{ ...contactElement, ...phoneSx }} onClick={handlePhoneClick}>
          <LocalPhoneOutlinedIcon sx={contactIconSx} />
          <Typography sx={contactTitleSx}>+48 {phone}</Typography>
        </Box>
        <Box sx={emailSx}>
          <VerticalSeparator />
        </Box>

        <Box sx={{ ...contactElement, ...emailSx }} onClick={handleEmailClick}>
          <EmailOutlinedIcon sx={contactIconSx} />
          <Typography sx={contactTitleSx}>{email}</Typography>
        </Box>
        <SocialMedias />
      </Box>
    </Box>
  );
};

export default ContactElements;
