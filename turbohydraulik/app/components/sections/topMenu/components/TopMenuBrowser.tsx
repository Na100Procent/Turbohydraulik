import React from "react";
import { Box } from "@mui/material";
import TopMenuButtons from "../TopMenuButtons";
import ContactUsButton from "@/app/components/shared/ContactUsButton";
import LogoContainer from "@/app/components/shared/LogoContainer";

const containerSx = {
  padding: "0 20px 10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  mt: { xl: "-50px", lg: "-50px", md: "-30px" },
};

const TopMenuBrowser = () => {
  return (
    <Box sx={containerSx}>
      <LogoContainer />
      <TopMenuButtons withSeparators />
      <ContactUsButton />
    </Box>
  );
};

export default TopMenuBrowser;
