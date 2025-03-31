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
import GoogleMapContainer from "../../shared/googleMap/GoogleMapContainer";
import { CityData } from "@/app/data/types/dataTypes";
interface Props {
  phoneNumber?: string;
  address?: string;
  cityData?: CityData;
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

const mapContactSx = {
  display: "flex",
  gap: "50px",
  justifyContent: "space-between",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
};

const googleMapSx = {
  width: "100%",
  maxWidth: "1000px",
  borderRadius: "15px",
  overflow: "hidden",
};
const ContactElements = ({ phoneNumber, address, cityData }: Props) => {
  const phone = phoneNumber ? phoneNumber : defaultPhoneNUmber;
  const convertedPhoneNumber = convertPhoneNum(phone);

  const { googleMapCords, name } = cityData || {};
  return (
    <Box sx={container}>
      <Typography sx={titleSx} variant="h2">
        Kontakt Turbo Hydraulik {name}
      </Typography>

      <Box sx={mapContactSx}>
        <Box
          display={"flex"}
          gap={"50px"}
          flexWrap="wrap"
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

        {googleMapCords && (
          <Box sx={googleMapSx}>
            <GoogleMapContainer cityCords={googleMapCords} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContactElements;
