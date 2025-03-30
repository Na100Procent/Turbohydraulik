"use client";
import React from "react";
import dynamic from "next/dynamic";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import { sectionIds } from "@/app/constants/appConstants";
import CommaIcon from "./components/CommaIcon";
import CallUsButton from "../../shared/CallUsButton";
import SubHeaders from "./components/SubHeaders";
import { ReviewsContent } from "@/app/data/types/sectionTypes";
import { websiteData } from "@/app/data/data";
import SectionIdentifier from "../../shared/SectionIdentifier";

const ReviewsHorizontalScrollList = dynamic(
  () => import("./ReviewsHorizontalScrollList"),
  { ssr: false }
);

interface Props {
  content?: ReviewsContent;
  phoneNumber?: string;
}

const CustomerReviews = ({ content, phoneNumber }: Props) => {
  const reviewsContent = content || websiteData.homepageContent;

  const {
    testimonials_h2,
    testimonials_text_1,
    testimonials_h3,
    testimonials_text_2,
  } = reviewsContent;

  const mainColor = theme.palette.primary.main;

  return (
    <BackgroundWrapper bgColor={theme.palette.custom.blueLight}>
      <Box sx={{ overflowX: "hidden" }}>
        <SectionPaddingWrapper>
          <SectionIdentifier sectionId={sectionIds.reviews} />
          <Box
            padding={sectionXPadding}
            maxWidth="900px"
            zIndex="10"
            position="relative"
          >
            <SectionHeader headerColor={mainColor} header={testimonials_h2} />
            <Typography
              mt="30px"
              color={mainColor}
              sx={{ fontFamily: "UniteaSans", fontWeight: "500" }}
            >
              {testimonials_text_1}
            </Typography>
          </Box>
        </SectionPaddingWrapper>
        <CommaIcon />
        <ReviewsHorizontalScrollList />
        <SubHeaders
          testimonials_h3={testimonials_h3}
          testimonials_text_2={testimonials_text_2}
        />
        <Box display={"flex"} justifyContent={"center"} mt="50px" gap="20px">
          <CallUsButton phoneNumber={phoneNumber} />
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default CustomerReviews;
