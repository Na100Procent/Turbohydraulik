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
import SectionIdentifier from "../../shared/SectionIdentifier";
import { faqImageUrl } from "@/app/constants/imagesUrls";

interface Props {
  phoneNumber?: string;
}

const contentSx = {
  mt: "50px",
  display: "flex",
  padding: sectionXPadding,
  gap: {
    xl: "100px",
    lg: "20px",
    md: "20px",
    sm: "20px",
    xs: "20px",
    xxs: "20px",
  },
  alignItems: {
    xl: "start",
    lg: "start",
    md: "center",
    sm: "center",
    xs: "center",
    xxs: "center",
  },
  justifyContent: "space-between",

  flexDirection: {
    xl: "row",
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
};

const imageSx = {
  marginBottom: "30px",
  borderRadius: "15px",
  maxWidth: "700px",
};
const FAQsection = ({ phoneNumber }: Props) => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <SectionPaddingWrapper>
        <SectionIdentifier sectionId={sectionIds.faq} />
        <Box>
          <SectionCenterHeader
            header="Najczęściej zadawane pytania"
            bottomHeader="Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług hydraulicznych. Jeśli nie możesz znaleźć odpowiedzi, skontaktuj się z nami!"
            headerColor={theme.palette.primary.main}
          />
          <Box sx={contentSx}>
            <FAQElements />
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Image
                src={faqImageUrl}
                alt="Turbo hydraulik FAQ"
                layout="responsive"
                width={500}
                height={560}
                style={imageSx}
              />

              <CallUsButton phoneNumber={phoneNumber} />
            </Box>
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default FAQsection;
