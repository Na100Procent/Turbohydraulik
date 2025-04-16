import React from "react";
import { Box } from "@mui/material";
import TopMenuButtons from "../TopMenuButtons";
import ContactUsButton from "@/app/components/shared/ContactUsButton";
import LogoContainer from "@/app/components/shared/LogoContainer";

const logoButtonSx = {
  mt: "-35px",
  padding: "0 20px 10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
};

const TopMenuBrowser = () => {
  return (
    <Box sx={logoButtonSx}>
      <LogoContainer />
      <TopMenuButtons withSeparators />
      <ContactUsButton />
    </Box>
  );
};

export default TopMenuBrowser;
