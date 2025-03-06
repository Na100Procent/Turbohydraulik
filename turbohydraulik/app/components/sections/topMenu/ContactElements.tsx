import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import theme from "@/app/theme/theme";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VerticalSeparator from "../../shared/VerticalSeparator";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { TopMenuOrnament } from "@/public/fonts/assets/icons/icons";

const contactElement = {
  display: "flex",
  alignItems: "center",
  zIndex: 3,
  padding: "10px",
  gap: "10px",
};

const ornamentSx = {
  position: "absolute",
  top: "-60px",
  right: {
    xl: "-900px",
    lg: "-1250px",
    md: "-1550px",
    sm: "-1700px",
    xs: "-1200px",
  },
  zIndex: 1,
};

const contactTitleSx = {
  color: theme.palette.custom.background,
  fontFamily: "UniteaSans",
  fontSize: "14px",
  fontWeight: 500,
};

const contactIconSx = {
  width: "20px",
  height: "20px",
  mt: "-4px",
  color: theme.palette.secondary.main,
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
      <Box display="flex" justifyContent="right" alignItems="center" gap="20px">
        <Box sx={contactElement}>
          <LocalPhoneOutlinedIcon sx={contactIconSx} />
          <Typography sx={contactTitleSx}>+1 (555) 000-0000</Typography>
        </Box>

        <VerticalSeparator />

        <Box sx={contactElement}>
          <EmailOutlinedIcon sx={contactIconSx} />
          <Typography sx={contactTitleSx}>info@turbohydraulik.pl</Typography>
        </Box>

        <VerticalSeparator />

        <Box display="flex" justifyContent="center" alignItems="center" mx={2}>
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
