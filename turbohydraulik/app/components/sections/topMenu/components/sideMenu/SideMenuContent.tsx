import { Box } from "@mui/material";
import React from "react";
import TopMenuButtons from "../../TopMenuButtons";
import ContactUsButton from "@/app/components/shared/ContactUsButton";
import SocialMediasSeparator from "../../../footer/components/SocialMediasSeparator";
import theme from "@/app/theme/theme";
import LogoContainer from "@/app/components/shared/LogoContainer";

interface Props {
  handleDrawerToggle: () => void;
}
const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  flexDirection: "column",
  gap: "50px",
  paddingBottom: "20px",
};
const buttonsSx = {
  gap: {
    sm: "20px",
    xs: "20px",
    xxs: "20px",
  },
};
const SideMenuContent = ({ handleDrawerToggle }: Props) => {
  return (
    <Box sx={container}>
      <LogoContainer />
      <TopMenuButtons
        isVertical
        addSx={buttonsSx}
        onButtonClick={handleDrawerToggle}
      />
      <SocialMediasSeparator separatorColor={theme.palette.primary.main} />
      <ContactUsButton onClick={handleDrawerToggle} />
    </Box>
  );
};

export default SideMenuContent;
