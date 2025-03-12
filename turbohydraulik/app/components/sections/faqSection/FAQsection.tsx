import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import { Box } from "@mui/material";
import Image from "next/image";
import CallUsButton from "../../shared/CallUsButton";
import { sectionIds } from "@/app/constants/appConstants";
import { sectionXPadding } from "@/app/constants/styles";
import FAQElements from "./FAQElements";

const contentSx = {
  mt: "50px",
  display: "flex",
  padding: sectionXPadding,
  gap: "30px",
  alignItems: {
    xl: "start",
    lg: "start",
    md: "start",
    sm: "center",
    xs: "center",
    xxs: "center",
  },
  justifyContent: "center",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
};

const imageSx = {
  marginBottom: "20px",
  borderRadius: "15px",
};
const FAQsection = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <SectionPaddingWrapper>
        <Box paddingBottom={"200px"} id={sectionIds.faq}>
          <SectionCenterHeader
            topHeader="FAQ’S QUESTIONS"
            header="Frequently Asked Questions"
            bottomHeader="Find answers to the most frequently asked questions about our plumbing services. If you can't find the answer, please contact us!"
            headerColor={theme.palette.primary.main}
          />
          <Box sx={contentSx}>
            <FAQElements />
            <Box>
              <Image
                src="https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11"
                alt="image"
                width={320}
                height={350}
                style={imageSx}
              />

              <CallUsButton />
            </Box>
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default FAQsection;
