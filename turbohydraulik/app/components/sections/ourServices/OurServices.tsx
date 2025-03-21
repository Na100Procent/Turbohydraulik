import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import { Box } from "@mui/material";
import ServiceContainer from "./ServiceContainer";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import CallUsButton from "../../shared/CallUsButton";
import { CityData } from "@/app/data/types/dataTypes";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import { OurServiceContent } from "@/app/data/types/sectionTypes";
import { websiteData } from "@/app/data/data";
import { sectionIds } from "@/app/constants/appConstants";

interface Props {
  city?: CityData;
  bgColor?: string;
  headerColor?: string;
  bottomHeaderColor?: string;
  content?: OurServiceContent;
  phoneNumber?: string;
}

const headerSx = {
  padding: sectionXPadding,
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

const OurServices = ({
  city,
  bgColor,
  headerColor,
  content,
  bottomHeaderColor,
  phoneNumber,
}: Props) => {
  const serviceContent = content ? content : websiteData.homepageContent;
  const { service_h2, service_h3, service_text } = serviceContent;
  return (
    <BackgroundWrapper bgColor={bgColor ? bgColor : theme.palette.primary.main}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap="0px"
        id={sectionIds.services}
      >
        <SectionPaddingWrapper>
          <Box sx={headerSx}>
            <SectionCenterHeader
              headerColor={
                headerColor ? headerColor : theme.palette.custom.background
              }
              topHeader={service_h3}
              header={service_h2}
              bottomHeader={service_text}
              bottomHeaderColor={bottomHeaderColor}
            />
          </Box>
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
