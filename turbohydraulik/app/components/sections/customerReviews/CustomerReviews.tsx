import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import ReviewsHorizontalScrollList from "./ReviewsHorizontalScrollList";
import { sectionIds } from "@/app/constants/appConstants";
import { CityData } from "@/app/data/types";
import { websiteData } from "@/app/data/data";
import CommaIcon from "./components/CommaIcon";
import CallUsButton from "../../shared/CallUsButton";
import SubHeaders from "./components/SubHeaders";
import RectangularButton from "../../shared/RectangularButton";

interface Props {
  city?: CityData;
  content?: string;
}

const CustomerReviews = ({ city, content }: Props) => {
  const mainColor = theme.palette.primary.main;
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.blueLight}>
      <>
        <SectionPaddingWrapper>
          <Box
            id={sectionIds.reviews}
            padding={sectionXPadding}
            maxWidth="900px"
            zIndex="10"
            position="relative"
          >
            <SectionHeader
              subHeaderColor={mainColor}
              headerColor={mainColor}
              subHeader="OUR TESTIMONIALS"
              header={`Customer Reviews About Turbo Hydraulik ${
                city ? city.name : ""
              }`}
            />
            <Typography
              mt="30px"
              color={mainColor}
              sx={{ fontFamily: "UniteaSans", fontWeight: "500" }}
            >
              {content ? content : websiteData.home.reviews}
            </Typography>
          </Box>
        </SectionPaddingWrapper>
        <CommaIcon />
        <ReviewsHorizontalScrollList />
        <SubHeaders />
        <Box display={"flex"} justifyContent={"center"} mt="50px" gap="20px">
          <CallUsButton />
          <RectangularButton title="Dodaj opinię" />
        </Box>
      </>
    </BackgroundWrapper>
  );
};

export default CustomerReviews;
