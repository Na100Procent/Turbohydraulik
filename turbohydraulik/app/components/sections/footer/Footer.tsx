import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import Policy from "./Policy";
import { Box } from "@mui/material";
import LogoContact from "./LogoContact";
import HorizontalSeparator from "./components/HorizontalSeparator";
import LinksAndServices from "./components/LinksAndServices";
import SocialMediasSeparator from "./components/SocialMediasSeparator";

const Footer = () => {
  return (
    <BackgroundWrapper
      bgColor={theme.palette.primary.main}
      sx={{ padding: "0" }}
    >
      <Box
        padding={"100px 0 0 0"}
        display={"flex"}
        flexDirection={"column"}
        gap="50px"
      >
        <LogoContact />
        <HorizontalSeparator />
        <LinksAndServices />
        <SocialMediasSeparator />
        <Policy />
      </Box>
    </BackgroundWrapper>
  );
};

export default Footer;
