import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import ServiceContainer from "./ServiceContainer";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import CallUsButton from "../../shared/CallUsButton";
import { CityData } from "@/app/data/types/dataTypes";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import { OurServiceContent } from "@/app/data/types/sectionTypes";
import { sectionIds } from "@/app/constants/appConstants";
import SectionIdentifier from "../../shared/SectionIdentifier";
import { homepageDataContent } from "@/app/data/data";

interface Props {
  city?: CityData;
  bgColor?: string;
  headerColor?: string;
  bottomHeaderColor?: string;
  content?: OurServiceContent;
  phoneNumber?: string;
}

const headerSx = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  justifyContent: "center",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "row",
    xs: "column",
    xxs: "column",
  },
};
const textSx = {
  fontWeight: "500",
  fontSize: "25px",
  color: theme.palette.secondary.main,
  marginTop: "20px",

  textAlign: {
    xl: "center",
    lg: "center",
    md: "center",
    sm: "left",
    xs: "left",
    xxs: "left",
  },

  padding: sectionXPadding,
};
const OurServices = ({
  city,
  bgColor,
  headerColor,
  content,
  bottomHeaderColor,
  phoneNumber,
}: Props) => {
  const serviceContent = content ? content : homepageDataContent;
  const { service_h2, service_h3, service_text } = serviceContent;
  return (
    <BackgroundWrapper bgColor={bgColor ? bgColor : theme.palette.primary.main}>
      <SectionIdentifier sectionId={sectionIds.services} />
      <Box display={"flex"} flexDirection={"column"}>
        <SectionPaddingWrapper>
          <Box sx={headerSx}>
            <SectionCenterHeader
              headerColor={
                headerColor ? headerColor : theme.palette.custom.background
              }
              header={service_h2}
              bottomHeader={service_text}
              bottomHeaderColor={bottomHeaderColor}
            />
          </Box>
          <Typography variant="h3" sx={textSx}>
            {service_h3}
          </Typography>
        </SectionPaddingWrapper>
        <ServiceContainer city={city} />
        <Box display={"flex"} justifyContent={"center"} mt="20px">
          <CallUsButton phoneNumber={phoneNumber} />
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default OurServices;
