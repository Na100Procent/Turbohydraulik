import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import Policy from "./Policy";
import { Box } from "@mui/material";
import LogoContact from "./LogoContact";
import HorizontalSeparator from "./components/HorizontalSeparator";
import LinksAndServices from "./components/LinksAndServices";
import SocialMediasSeparator from "./components/SocialMediasSeparator";
import { YellowRightOrnament } from "@/public/assets/icons/icons";
import { sectionIds } from "@/app/constants/appConstants";

interface Props {
  phoneNumber?: string;
  postalCode?: string;
  street?: string;
  cityName?: string;
}
const Footer = ({ phoneNumber, postalCode, street, cityName }: Props) => {
  console.log(postalCode, street, cityName);
  const address =
    postalCode && cityName && street
      ? `${postalCode} ${cityName}, ${street}`
      : "";
  return (
    <BackgroundWrapper
      bgColor={theme.palette.primary.main}
      sx={{ padding: "0" }}
    >
      <Box id={sectionIds.contact}>
        <Box
          padding={"150px 0 0 0"}
          display={"flex"}
          flexDirection={"column"}
          gap="50px"
          position={"relative"}
        >
          <LogoContact phoneNumber={phoneNumber} address={address} />
          <HorizontalSeparator />
          <LinksAndServices />
          <SocialMediasSeparator />
          <Policy />
          <Box position={"absolute"} top={"-130px"} left={"-10px"}>
            <YellowRightOrnament />
          </Box>
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default Footer;
