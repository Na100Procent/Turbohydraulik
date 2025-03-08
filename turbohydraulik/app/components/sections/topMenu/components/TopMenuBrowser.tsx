import React from "react";
import { TopMenuLogo } from "@/public/assets/icons/icons";
import Link from "next/link";
import { homePageLink } from "@/app/constants/appConstants";
import { Box } from "@mui/material";
import TopMenuButtons from "../TopMenuButtons";
import ContactUsButton from "@/app/components/shared/ContactUsButton";

const logoButtonSx = {
  padding: "0 20px 20px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
};

const TopMenuBrowser = () => {
  return (
    <Box sx={logoButtonSx}>
      <Link href={homePageLink}>
        <TopMenuLogo />
      </Link>
      <TopMenuButtons withSeparators />
      <Box mb="-5px">
        <ContactUsButton />
      </Box>
    </Box>
  );
};

export default TopMenuBrowser;
