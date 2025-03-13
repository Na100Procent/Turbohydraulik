import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import HowToList from "./HowToList";
import { Box } from "@mui/material";
import CallUsButton from "../../shared/CallUsButton";
import { sectionIds } from "@/app/constants/appConstants";
import { HowToContent } from "@/app/data/types/sectionTypes";
import { websiteData } from "@/app/data/data";

interface Props {
  content?: HowToContent;
}
const HowToOrderUs = ({ content }: Props) => {
  const howToContent = content ? content : websiteData.homepageContent;
  const steps_h2 = howToContent.steps_h2;
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <SectionPaddingWrapper>
        <Box
          display="flex"
          flexDirection="column"
          gap="60px"
          padding="0 0 100px 0"
          sx={{ fontFamily: "UniteaSans" }}
          id={sectionIds.orderUs}
        >
          <SectionCenterHeader
            header={steps_h2}
            bottomHeader="Aby zamówić usługę hydrauliczną, skontaktuj się z nami telefonicznie lub za pomocą formularza kontaktowego na naszej stronie internetowej."
          />
          <HowToList />
          <Box display={"flex"} justifyContent={"center"} marginTop={"50px"}>
            <CallUsButton />
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default HowToOrderUs;
