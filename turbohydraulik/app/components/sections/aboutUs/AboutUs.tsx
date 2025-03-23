import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import ServiceCircularLink from "./components/ServiceCircularLink";
import Image from "next/image";
import { aboutUsUrl } from "@/app/constants/imagesUrls";
import OurMission from "./components/OurMission";
import CallUsButton from "../../shared/CallUsButton";
import { sectionIds } from "@/app/constants/appConstants";
import { AboutUsContent } from "@/app/data/types/sectionTypes";
import { websiteData } from "@/app/data/data";

interface Props {
  content?: AboutUsContent;
  bgColor?: string;
  phoneNumber?: string;
}

const contentSx = {
  display: "flex",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  justifyContent: "center",
  alignItems: "center",
  mt: "80px",
  gap: "100px",
};

const headerSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
};

const imgSx = {
  maxWidth: "500px",
  minWidth: "300px",
  width: "100%",
  height: "100%",
  maxHeight: "490px",
  borderRadius: "15px",
  overflow: "hidden",
};

const AboutUs = ({ content, bgColor, phoneNumber }: Props) => {
  const aboutUsContent = content ? content : websiteData.homepageContent;
  const aboutUs_h2 = aboutUsContent.aboutUs_h2;
  const aboutUs_h3 = aboutUsContent.aboutUs_h3;
  const aboutUs_text = aboutUsContent.aboutUs_text;
  return (
    <BackgroundWrapper
      bgColor={bgColor ? bgColor : theme.palette.custom.yellowLight}
    >
      <SectionPaddingWrapper>
        <Box padding={sectionXPadding} id={sectionIds.about}>
          <Box sx={headerSx}>
            <SectionHeader
              subHeaderColor={theme.palette.secondary.main}
              headerColor={theme.palette.primary.main}
              subHeader="O NAS"
              header={aboutUs_h2}
            />

            <ServiceCircularLink />
          </Box>
          <Box sx={contentSx}>
            <Box sx={imgSx}>
              <Image
                layout="responsive"
                src={aboutUsUrl}
                alt={`Turbo Hydraulik ${aboutUs_h2}`}
                width={400}
                height={490}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="30px"
              justifyContent="space-between"
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "600",
                  fontSize: "30px",
                  fontFamily: "UniteaSans",
                  color: theme.palette.primary.main,
                }}
              >
                {aboutUs_h3}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.custom.darkGray,
                  fontFamily: "UniteaSans",
                  fontWeight: "500",
                }}
              >
                {aboutUs_text}
              </Typography>
              <OurMission />
              <div>
                <CallUsButton phoneNumber={phoneNumber} />
              </div>
            </Box>
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default AboutUs;
