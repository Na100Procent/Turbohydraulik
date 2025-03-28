"use client";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import { Box } from "@mui/material";
import ContactElements from "./components/ContactElements";
import TopMenuBrowser from "./components/TopMenuBrowser";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "@/app/theme/theme";
import TopMenuMobile from "./components/TopMenuMobile";
import { convertPhoneNum } from "../../shared/helpers/convertPhoneNum";

interface Props {
  phoneNumber?: string;
}
const contentSx = {
  position: "fixed",
  width: "100%",
  zIndex: 100,
  top: 0,
  backgroundColor: theme.palette.custom.background,
};

const TopMenu = ({ phoneNumber }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const convertedPhoneNum = convertPhoneNum(phoneNumber);
  return (
    <BackgroundWrapper sx={{ padding: 0 }}>
      <Box sx={contentSx}>
        <ContactElements phoneNumber={convertedPhoneNum} />
        {isMobile ? <TopMenuMobile /> : <TopMenuBrowser />}
      </Box>
    </BackgroundWrapper>
  );
};

export default TopMenu;
