import { Box, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./components/ContactForm";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { sectionXPadding } from "@/app/constants/styles";
import { email, defaultPhoneNUmber } from "@/app/constants/appConstants";
import theme from "@/app/theme/theme";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { convertPhoneNum } from "../../shared/helpers/convertPhoneNum";
interface Props {
  phoneNumber?: string;
  address?: string;
  cityName?: string;
}
const container = {
  position: "relative",
  display: "flex",
  gap: "20px",
  padding: sectionXPadding,
  flexDirection: "column",
};

const titleSx = {
  fontSize: "40px",
  position: "relative",
  top: "-80px",
  fontWeight: "600",
  width: "100%",
  textAlign: "left",
  color: theme.palette.custom.background,
};
const LogoContact = ({ phoneNumber, address, cityName }: Props) => {
  const phone = phoneNumber ? phoneNumber : defaultPhoneNUmber;
  const convertedPhoneNumber = convertPhoneNum(phone);
  return (
    <Box sx={container}>
      <Typography sx={titleSx} variant="h2">
        Kontakt Turbo Hydraulik {cityName}
      </Typography>

      <Box
        display={"flex"}
        gap={"50px"}
        flexWrap="wrap"
        width={"100%"}
        justifyContent={"left"}
      >
        <ContactForm
          subHeader="NUMER TELEFONU"
          header={convertedPhoneNumber}
          icon={<LocalPhoneOutlinedIcon />}
        />
        <ContactForm
          subHeader="ADRES E-MAIL"
          header={email}
          icon={<EmailOutlinedIcon />}
        />
        {address && (
          <ContactForm
            subHeader="ADRES"
            header={address}
            icon={<ApartmentOutlinedIcon />}
          />
        )}
      </Box>
    </Box>
  );
};

export default LogoContact;
