import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import Image from "next/image";
import { aboutUsUrl } from "@/app/constants/imagesUrls";
import OurMission from "./components/OurMission";
import CallUsButton from "../../shared/CallUsButton";
import { sectionIds } from "@/app/constants/appConstants";
import { CityData } from "@/app/data/types";
import { websiteData } from "@/app/data/data";

interface Props {
  city?: CityData;
  content?: string;
  bgColor?: string;
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

const imgSx = {
  maxWidth: "400px",
  width: "100%",
  height: "100%",
  maxHeight: "490px",
  borderRadius: "15px",
  overflow: "hidden",
};

const AboutCity = ({ city, content, bgColor }: Props) => {
  return (
    <BackgroundWrapper
      bgColor={bgColor ? bgColor : theme.palette.custom.background}
    >
      <SectionPaddingWrapper>
        <Box padding={sectionXPadding} id={sectionIds.about}>
          <SectionHeader
            subHeaderColor={theme.palette.secondary.main}
            headerColor={theme.palette.primary.main}
            subHeader="ABOUT CITY"
            header={`About Plumbing in city ${city ? city.name : ""}`}
          />

          <Box sx={contentSx}>
            <Box
              display="flex"
              flexDirection="column"
              gap="30px"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  color: theme.palette.custom.darkGray,
                  fontFamily: "UniteaSans",
                  fontWeight: "500",
                }}
              >
                {content ? content : websiteData.home.about}
              </Typography>
              <OurMission />
              <div>
                <CallUsButton />
              </div>
            </Box>
            <Box sx={imgSx}>
              <Image
                layout="responsive"
                src={aboutUsUrl}
                alt="About img"
                width={400}
                height={490}
              />
            </Box>
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default AboutCity;
