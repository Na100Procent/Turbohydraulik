import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import Policy from "./Policy";
import { Box } from "@mui/material";
import LogoContact from "./LogoContact";
import HorizontalSeparator from "./components/HorizontalSeparator";
import LinksAndServices from "./components/LinksAndServices";
import SocialMediasSeparator from "./components/SocialMediasSeparator";
import { YellowRightOrnament } from "@/public/fonts/assets/icons/icons";
import PlumberBanner from "./components/PlumberBanner";
import { sectionIds } from "@/app/constants/appConstants";

const Footer = () => {
  return (
    <BackgroundWrapper
      bgColor={theme.palette.primary.main}
      sx={{ padding: "0" }}
    >
      <Box id={sectionIds.contact}>
        <PlumberBanner />
        <Box
          padding={"150px 0 0 0"}
          display={"flex"}
          flexDirection={"column"}
          gap="50px"
          position={"relative"}
        >
          <LogoContact />
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
