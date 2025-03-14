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
import { AboutServiceContent } from "@/app/data/types/sectionTypes";
import { SubService } from "@/app/data/types/dataTypes";
import SubServicesList from "./SubServicesList";

interface Props {
  content: AboutServiceContent;
  bgColor?: string;
  phoneNumber?: string;
  subServices: SubService[];
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
  alignItems: "top",
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
  width: "100%",
  height: "100%",
  maxHeight: "490px",
  borderRadius: "15px",
  overflow: "hidden",
};

const descriptionSx = {
  color: theme.palette.custom.darkGray,
  fontFamily: "UniteaSans",
  fontWeight: "500",
  maxWidth: "3000px",
  textAlign: "left",
};

const AboutService = ({
  content,
  bgColor,
  subServices,
  phoneNumber,
}: Props) => {
  const { aboutService_text, aboutService_h2 } = content;
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
              subHeader="O USŁUDZE"
              header={aboutService_h2}
            />
          </Box>
          <Box sx={contentSx}>
            <Box sx={imgSx}>
              <Image
                layout="responsive"
                src={aboutUsUrl}
                alt="About img"
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
                {aboutService_h2} Turbohydraulik
              </Typography>
              <Typography sx={descriptionSx}>{aboutService_text}</Typography>
              <SubServicesList subServices={subServices} />
              <Box display="flex" justifyContent="center" mt="20px">
                <CallUsButton phoneNumber={phoneNumber} />
              </Box>
            </Box>
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default AboutService;
