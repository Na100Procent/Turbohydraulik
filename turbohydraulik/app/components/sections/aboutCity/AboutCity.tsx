import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import Image from "next/image";
import { aboutUsUrl } from "@/app/constants/imagesUrls";
import CallUsButton from "../../shared/CallUsButton";
import { sectionIds } from "@/app/constants/appConstants";
import { AboutCityContent } from "@/app/data/types/sectionTypes";

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
  justifyContent: "left",

  alignItems: "center",
  mt: {
    xl: "-50px",
    lg: "-50px",
    md: "20px",
    sm: "20px",
    xs: "20px",
    xxs: "20px",
  },
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
  const { aboutCity_h2, aboutCity_text1, aboutCity_h3, aboutCity_text2 } =
    content;

  return (
    <BackgroundWrapper
      bgColor={bgColor ? bgColor : theme.palette.custom.background}
    >
      <SectionPaddingWrapper>
        <Box padding={sectionXPadding} id={sectionIds.about}>
          <SectionHeader
            subHeaderColor={theme.palette.secondary.main}
            headerColor={theme.palette.primary.main}
            subHeader="O MIEŚCIE"
            header={aboutCity_h2}
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
                  selfAlign: "top",
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
