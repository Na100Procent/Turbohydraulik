import { Box, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./components/ContactForm";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { sectionXPadding } from "@/app/constants/styles";
import { defaultPhoneNUmber, emailAddress } from "@/app/constants/appConstants";
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
  top: {
    xl: "-180px",
    lg: "-180px",
    md: "-180px",
    sm: "0",
    xs: "0",
    xxs: "0",
  },
  fontWeight: "600",
  width: "100%",
  textAlign: "left",
  color: theme.palette.custom.background,
  maxWidth: {
    xl: "800px",
    lg: "500px",
    md: "400px",
    sm: "800px",
    xs: "800px",
    xxs: "800px",
  },
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
  zIndex: 2,
  position: "absolute",
  top: "-420px",
  right: {
    xl: "80px",
    lg: "80px",
    md: "50px",
    sm: "0",
    xs: "0",
    xxs: "0",
  },
  maxWidth: {
    xl: "700px",
    lg: "620px",
    md: "500px",
    sm: "950px",
    xs: "900px",
    xxs: "900px",
  },
  height: {
    xl: "400px",
    lg: "350px",
    md: "400px",
    sm: "400px",
    xs: "400px",
    xxs: "400px",
  },
  borderRadius: "15px",
  overflow: "hidden",
};
const ContactElements = ({ phoneNumber, address, cityData }: Props) => {
  const phone = phoneNumber ? phoneNumber : defaultPhoneNUmber;
  const convertedPhoneNumber = convertPhoneNum(phone);

  const { googleMapData, name } = cityData || {};
  return (
    <Box sx={container}>
      {googleMapData && (
        <Box sx={googleMapSx}>
          <GoogleMapContainer {...googleMapData} cityName={name} />
        </Box>
      )}

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
            header={emailAddress}
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
    </Box>
  );
};

export default ContactElements;
