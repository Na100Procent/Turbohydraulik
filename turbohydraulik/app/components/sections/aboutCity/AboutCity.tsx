import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import Image from "next/image";
import CallUsButton from "../../shared/CallUsButton";
import { sectionIds } from "@/app/constants/appConstants";
import { AboutCityContent } from "@/app/data/types/sectionTypes";
import SectionIdentifier from "../../shared/SectionIdentifier";
import { aboutUsUrl } from "@/app/constants/imagesUrls";

interface Props {
  content: AboutCityContent;
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
  justifyContent: "space-between",

  alignItems: "start",
  mt: {
    xl: "20px",
    lg: "20px",
    md: "20px",
    sm: "20px",
    xs: "20px",
    xxs: "20px",
  },
  gap: "20px",
};

const imgSx = {
  maxWidth: "700px",
  width: "100%",
  height: "100%",

  borderRadius: "15px",
  overflow: "hidden",
};

const header3Sx = {
  fontWeight: "700",
  zIndex: 10,
  lineHeight: "30px",
  fontFamily: "UniteaSans",
  fontSize: "30px",
  maxWidth: "700px",
  color: theme.palette.primary.main,
  textAlign: "left",
};
const AboutCity = ({ content, bgColor, phoneNumber }: Props) => {
  const {
    aboutCity_h2,
    aboutCity_text1,
    aboutCity_h3,
    aboutCity_text2,
    cityCardUrl,
  } = content;

  return (
    <BackgroundWrapper
      bgColor={bgColor ? bgColor : theme.palette.custom.background}
    >
      <SectionPaddingWrapper>
        <SectionIdentifier sectionId={sectionIds.about} />
        <Box padding={sectionXPadding}>
          <SectionHeader
            headerColor={theme.palette.primary.main}
            header={aboutCity_h2 ? aboutCity_h2 : ""}
          />

          <Box sx={contentSx}>
            <Box
              display="flex"
              flexDirection="column"
              gap="30px"
              justifyContent="space-between"
              maxWidth="650px"
              width={"100%"}
            >
              <Typography
                sx={{
                  color: theme.palette.custom.darkGray,
                  fontFamily: "UniteaSans",
                  fontWeight: "500",
                }}
              >
                {aboutCity_text1}
              </Typography>
              <Typography sx={header3Sx} variant="h3">
                {aboutCity_h3}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.custom.darkGray,
                  fontFamily: "UniteaSans",
                  fontWeight: "500",
                  selfAlign: "top",
                }}
              >
                {aboutCity_text2}
              </Typography>
              <div>
                <CallUsButton phoneNumber={phoneNumber} />
              </div>
            </Box>
            <Box sx={imgSx}>
              <Image
                layout="responsive"
                src={cityCardUrl ? cityCardUrl : aboutUsUrl}
                alt={`Turbo Hydraulik ${aboutCity_h2}`}
                width={500}
                height={590}
              />
            </Box>
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default AboutCity;
