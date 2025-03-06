import { LogoIcon } from "@/app/assets/icons/icons";
import { Box } from "@mui/material";
import React from "react";
import ContactForm from "./components/ContactForm";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const LogoContact = () => {
  return (
    <Box
      display={"flex"}
      gap={"20px"}
      padding={"0 80px"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <LogoIcon />

      <Box display={"flex"} gap={"50px"}>
        <ContactForm
          subHeader="PHONE NO"
          header="+1 (555) 000-0000"
          icon={<LocalPhoneOutlinedIcon />}
        />
        <ContactForm
          subHeader="EMAIL ADDRESS"
          header="info@turnohydraulik.pl"
          icon={<EmailOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default LogoContact;
