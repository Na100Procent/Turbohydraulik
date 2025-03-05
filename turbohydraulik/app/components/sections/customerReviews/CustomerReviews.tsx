import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import ReviewsHorizontalScrollList from "./ReviewsHorizontalScrollList";
import { CommasIcon } from "@/app/assets/icons/icons";

const CustomerReviews = () => {
  const mainColor = theme.palette.primary.main;
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.blueLight}>
      <>
        <SectionPaddingWrapper>
          <Box
            padding={sectionXPadding}
            maxWidth="900px"
            zIndex="10"
            position="relative"
          >
            <SectionHeader
              subHeaderColor={mainColor}
              headerColor={mainColor}
              subHeader="OUR TESTIMONIALS"
              header="Customer Reviews About Turbo Hydraulik"
            />
            <Typography mt="30px" color={mainColor}>
              To order a plumbing service, contact us by phone or via the
              contact form on our website.
            </Typography>
          </Box>
        </SectionPaddingWrapper>
        <Box
          sx={{ position: "absolute", top: "100px", right: "100px", zIndex: 0 }}
        >
          <CommasIcon />
        </Box>

        <ReviewsHorizontalScrollList />
      </>
    </BackgroundWrapper>
  );
};

export default CustomerReviews;
