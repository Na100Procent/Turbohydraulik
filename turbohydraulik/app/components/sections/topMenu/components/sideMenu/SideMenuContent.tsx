import { TopMenuLogo } from "@/public/assets/icons/icons";
import { Box } from "@mui/material";
import React from "react";
import TopMenuButtons from "../../TopMenuButtons";
import ContactUsButton from "@/app/components/shared/ContactUsButton";
import SocialMediasSeparator from "../../../footer/components/SocialMediasSeparator";
import theme from "@/app/theme/theme";

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  flexDirection: "column",
  gap: "50px",
};
const buttonsSx = {
  gap: {
    sm: "20px",
    xs: "20px",
    xxs: "20px",
  },
};
const SideMenuContent = () => {
  return (
    <Box sx={container}>
      <TopMenuLogo />
      <TopMenuButtons isVertical addSx={buttonsSx} />
      <SocialMediasSeparator separatorColor={theme.palette.primary.main} />
      <ContactUsButton />
    </Box>
  );
};

export default SideMenuContent;
