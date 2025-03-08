import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box, Typography } from "@mui/material";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import ReviewsHorizontalScrollList from "./ReviewsHorizontalScrollList";
import { YellowRightOrnament } from "@/public/assets/icons/icons";
import RectangularButton from "../../shared/RectangularButton";
import { sectionIds } from "@/app/constants/appConstants";
import { CityData } from "@/app/data/types";
import { websiteData } from "@/app/data/data";
import CommaIcon from "./components/CommaIcon";

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
        <Box position={"absolute"} top={"-130px"} left={"-10px"}>
          <YellowRightOrnament />
        </Box>
        <CommaIcon />

        <ReviewsHorizontalScrollList />
        <Box display={"flex"} justifyContent={"center"} marginTop={"50px"}>
          <RectangularButton title="View All Reviews" />
        </Box>
      </>
    </BackgroundWrapper>
  );
};

export default CustomerReviews;
