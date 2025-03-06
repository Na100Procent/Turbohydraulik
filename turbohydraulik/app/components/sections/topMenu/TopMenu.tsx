import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import TopMenuButtons from "./TopMenuButtons";
import { Box } from "@mui/material";
import RectangularButton from "../../shared/RectangularButton";
import ContactElements from "./ContactElements";
import TMLogo from "../../../assets/icons/TopMenuLogo.svg";

const container = {
  padding: "0 20px 20px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
};

const TopMenu = () => {
  return (
    <BackgroundWrapper
      bgColor={theme.palette.custom.background}
      sx={{ padding: 0 }}
    >
      <Box>
        <ContactElements />
        <Box sx={container}>
          <TMLogo />
          <TopMenuButtons />
          <Box mb="-5px">
            <RectangularButton
              title="Contact us"
              bgColor={theme.palette.secondary.main}
            />
          </Box>
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default TopMenu;
