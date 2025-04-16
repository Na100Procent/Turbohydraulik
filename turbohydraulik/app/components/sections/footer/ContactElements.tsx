import { Box, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./components/ContactForm";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { sectionXPadding } from "@/app/constants/styles";
import { defaultPhoneNUmber, emailAddress } from "@/app/constants/appConstants";
import theme from "@/app/theme/theme";
import { convertPhoneNum } from "../../shared/helpers/convertPhoneNum";
import { CityData } from "@/app/data/types/dataTypes";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const GoogleMapContainer = dynamic(
  () => import("../../shared/googleMap/GoogleMapContainer"),
  {
    ssr: false,
    loading: () => <p style={{ textAlign: "center" }}>Ładowanie mapy...</p>,
  }
);

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

const mapContactSx = {
  display: "flex",
  gap: { xs: "30px", md: "50px" },
  justifyContent: "space-between",
  flexDirection: { xs: "column", md: "column", lg: "row" },
};

const googleMapSx = {
  width: "100%",
  zIndex: 2,
  position: "absolute",
  top: "-100px",
  right: { xl: "20px", lg: "80px", md: "0", sm: "0", xs: "0" },
  maxWidth: { xl: "700px", lg: "620px", md: "100%", sm: "100%", xs: "100%" },
  height: { xl: "400px", lg: "380px", md: "400px", sm: "400px", xs: "300px" },
  borderRadius: "15px",
  overflow: "hidden",
};

const ContactElements = ({ phoneNumber, address, cityData }: Props) => {
  const phone = phoneNumber || defaultPhoneNUmber;
  const convertedPhoneNumber = convertPhoneNum(phone);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { googleMapData, name } = cityData || {};
  const hasMap = !!googleMapData;

  return (
    <Box sx={container}>
      {hasMap && (
        <Box ref={ref} sx={googleMapSx}>
          {inView && <GoogleMapContainer {...googleMapData} cityName={name} />}
        </Box>
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "28px", sm: "34px", md: "40px" },
          fontWeight: "600",
          width: "100%",
          textAlign: "left",
          color: theme.palette.custom.background,
          maxWidth: { xl: "500px", lg: "500px", md: "450px", xs: "100%" },
          mt: hasMap
            ? { xs: "250px", sm: "340px", md: "350px", lg: "170px" }
            : "0px",
        }}
      >
        Kontakt Turbo Hydraulik {name}
      </Typography>

      <Box sx={mapContactSx}>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={{ xs: "30px", sm: "40px", md: "50px" }}
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
