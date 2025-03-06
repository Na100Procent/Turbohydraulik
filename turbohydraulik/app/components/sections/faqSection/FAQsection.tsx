import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
// import FAQElements from "./FAQElements";
// import { faqs } from "@/app/data/data";
import { Box } from "@mui/material";
// import Image from "next/image";
import CallUsButton from "../../shared/CallUsButton";

const FAQsection = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <SectionPaddingWrapper>
        <Box paddingBottom={"200px"}>
          <SectionCenterHeader
            topHeaderColor={theme.palette.secondary.main}
            topHeader="FAQ’S QUESTIONS"
            header="Frequently Asked Questions"
            bottomHeader="Find answers to the most frequently asked questions about our plumbing services. If you can't find the answer, please contact us!"
            headerColor={theme.palette.primary.main}
          />
          <Box
            mt="50px"
            display="flex"
            padding="0 100px"
            gap="30px"
            justifyContent="center"
          >
            {/* <FAQElements faqs={faqs} /> */}
            <Box>
              {/* <Image
                src="https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11"
                alt="image"
                width={320}
                height={350}
                style={{ marginBottom: "20px" }}
              /> */}
              {/* <RectangularButton
                title="View all faq's"
                bgColor={theme.palette.secondary.main}
                titleColor={theme.palette.primary.main}
              /> */}
              <CallUsButton />
            </Box>
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default FAQsection;
