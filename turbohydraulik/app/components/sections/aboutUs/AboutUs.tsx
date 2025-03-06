import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import ServiceCircularLink from "./components/ServiceCircularLink";
import Image from "next/image";
import { aboutUsUrl } from "@/public/fonts/assets/images/imagesUrls";
import OurMission from "./components/OurMission";
import CallUsButton from "../../shared/CallUsButton";
import { sectionIds } from "@/app/constants/appConstants";

const AboutUs = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <SectionPaddingWrapper>
        <Box padding={sectionXPadding} id={sectionIds.about}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <SectionHeader
              subHeaderColor={theme.palette.secondary.main}
              headerColor={theme.palette.primary.main}
              subHeader="ABOUT US"
              header="Provide the highest level Of Plumbing services"
            />

            <ServiceCircularLink />
          </Box>
          <Box display="flex" mt="80px" gap="100px">
            <Image src={aboutUsUrl} alt="About img" width={400} height={490} />
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
                Turbo Hydraulik is a company with many years of experience in
                the hydraulics industry, which specializes in comprehensive
                repair, assembly and maintenance services. We have been
                operating on the market for many years, gaining the trust of
                customers thanks to our reliability, professionalism and express
                response to notifications. Our team consists of qualified
                plumbers who guarantee the highest quality of services.
              </Typography>
              <OurMission />
              <div>
                <CallUsButton />
              </div>
            </Box>
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default AboutUs;
