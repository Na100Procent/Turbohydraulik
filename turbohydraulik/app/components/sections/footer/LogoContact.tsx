import { LogoIcon } from "@/public/assets/icons/icons";
import { Box } from "@mui/material";
import React from "react";
import ContactForm from "./components/ContactForm";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { sectionXPadding } from "@/app/constants/styles";
import { email, phoneNUmber } from "@/app/constants/appConstants";

const container = {
  display: "flex",
  gap: "20px",
  padding: sectionXPadding,
  alignItems: "left",
  justifyContent: "space-between",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
};
const LogoContact = () => {
  return (
    <Box sx={container}>
      <Box ml="-20px">
        <LogoIcon />
      </Box>
      <Box display={"flex"} gap={"50px"} flexWrap="wrap">
        <ContactForm
          subHeader="NUMER TELEFONU"
          header={phoneNUmber}
          icon={<LocalPhoneOutlinedIcon />}
        />
        <ContactForm
          subHeader="ADRES E-MAIL"
          header={email}
          icon={<EmailOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default LogoContact;
