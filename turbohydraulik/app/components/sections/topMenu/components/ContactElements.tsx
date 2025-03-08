import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import theme from "@/app/theme/theme";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VerticalSeparator from "../../../shared/VerticalSeparator";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { TopMenuOrnament } from "@/public/assets/icons/icons";
import { email, phoneNUmber } from "@/app/constants/appConstants";

const contactElement = {
  display: "flex",
  alignItems: "center",
  zIndex: 3,
  padding: "10px",
  gap: "6px",
};

const ornamentSx = {
  position: "absolute",
  top: "-60px",
  right: {
    xl: "-900px",
    lg: "-1250px",
    md: "-1500px",
    sm: "-1700px",
    xs: "-1400px",
  },
  zIndex: 1,
};

const elementsContainer = {
  display: "flex",
  justifyContent: {
    xl: "right",
    lg: "right",
    md: "right",
    sm: "right",
    xs: "center",
    xxs: "center",
  },
  alignItems: "center",
  gap: {
    xl: "20px",
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

const contactIconSx = {
  width: "20px",
  height: "20px",
  mt: "-4px",
  color: theme.palette.secondary.main,
};

const socialMedias = {
  justifyContent: "center",
  alignItems: "center",
  mx: 2,
  display: {
    xl: "flex",
    lg: "flex",
    md: "flex",
    sm: "flex",
    xs: "none",
    xxs: "none",
  },
  gap: "10px",
};

const socialIconSx = {
  width: "15px",
  height: "15px",
};

const iconBtn = {
  borderRadius: "50%",
  margin: "0 5px",
  zIndex: 3,
};

const ContactElements = () => {
  return (
    <Box mb="-15px">
      <Box sx={ornamentSx}>
        <TopMenuOrnament />
      </Box>
      <Box sx={elementsContainer}>
        <Box sx={contactElement}>
          <LocalPhoneOutlinedIcon sx={contactIconSx} />
          <Typography sx={contactTitleSx}>{phoneNUmber}</Typography>
        </Box>
        <VerticalSeparator />
        <Box sx={contactElement}>
          <EmailOutlinedIcon sx={contactIconSx} />
          <Typography sx={contactTitleSx}>{email}</Typography>
        </Box>

        <Box sx={socialMedias}>
          <VerticalSeparator />

          <IconButton
            sx={{
              backgroundColor: theme.palette.custom.darkBlue,
              color: "white",
              ...iconBtn,
            }}
          >
            <FacebookIcon sx={socialIconSx} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              ...iconBtn,
            }}
          >
            <TwitterIcon sx={socialIconSx} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: theme.palette.custom.darkBlue,
              color: "white",
              ...iconBtn,
            }}
          >
            <EmailIcon sx={socialIconSx} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactElements;
