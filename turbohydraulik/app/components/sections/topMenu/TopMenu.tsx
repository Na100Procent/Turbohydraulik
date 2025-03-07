import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import TopMenuButtons from "./TopMenuButtons";
import { Box } from "@mui/material";
import ContactElements from "./ContactElements";
import { TopMenuLogo } from "@/public/fonts/assets/icons/icons";
import ContactUsButton from "../../shared/ContactUsButton";
import Link from "next/link";
import { homePageLink } from "@/app/constants/appConstants";

const logoButtonSx = {
  padding: "0 20px 20px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
};

const contentSx = {
  position: "fixed",
  width: "100%",
  zIndex: 100,
  top: 0,
  backgroundColor: theme.palette.custom.background,
};

const TopMenu = () => {
  return (
    <BackgroundWrapper
      bgColor={theme.palette.custom.background}
      sx={{ padding: 0 }}
    >
      <Box sx={contentSx}>
        <ContactElements />
        <Box sx={logoButtonSx}>
          <Link href={homePageLink}>
            <TopMenuLogo />
          </Link>
          <TopMenuButtons />
          <Box mb="-5px">
            <ContactUsButton />
          </Box>
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default TopMenu;
