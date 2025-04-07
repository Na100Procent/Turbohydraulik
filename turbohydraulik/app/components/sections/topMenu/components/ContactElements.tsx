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

  paddingLeft: {
    xl: "70px",
    lg: "70px",
    md: "30px",
    xs: "10px",
  },
};

const contactTitleSx = {
  color: theme.palette.custom.background,
  fontFamily: "UniteaSans",
  fontWeight: 500,
  minWidth: "100px",
  fontSize: {
    sm: "16px",
    xs: "20px",
  },
};

const contactElement = {
  display: "flex",
  alignItems: "center",
  zIndex: 3,
  gap: "8px",
  borderRadius: "10px",
  padding: {
    sm: "10px",
    xs: "20px",
  },
  transition: "background-color 0.3s ease",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
};

const emailSx = {
  display: {
    sm: "flex",
    xs: "none",
  },
};

const contactIconSx = {
  color: theme.palette.secondary.main,
  width: {
    sm: "20px",
    xs: "28px",
  },
  height: {
    sm: "20px",
    xs: "28px",
  },
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
        <Box sx={contactElement} onClick={handlePhoneClick}>
          <LocalPhoneOutlinedIcon sx={contactIconSx} />
          <Typography sx={contactTitleSx}>{phoneToDisplay}</Typography>
        </Box>

        <Box sx={emailSx}>
          <VerticalSeparator />
        </Box>

        <Box sx={{ ...contactElement, ...emailSx }} onClick={handleEmailClick}>
          <EmailOutlinedIcon sx={contactIconSx} />
          <Typography sx={contactTitleSx}>{emailAddress}</Typography>
        </Box>

        <SocialMedias />
      </Box>
    </Box>
  );
};

export default ContactElements;
