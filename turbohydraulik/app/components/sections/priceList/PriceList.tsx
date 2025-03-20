import { Box, Typography } from "@mui/material";
import React from "react";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import CallUsButton from "../../shared/CallUsButton";
import { PriceListContent } from "@/app/data/types/sectionTypes";
import { websiteData } from "@/app/data/data";
import { sectionXPadding } from "@/app/constants/styles";

interface Props {
  items: { title: string; price: number }[];
  content?: PriceListContent;
  phoneNumber?: string;
}

const contentSx = {
  width: "100%",
  my: 2,
  color: theme.palette.primary.main,
};
const bottomHeaderSx = {
  fontWeight: "500",
  fontSize: "20px",
  mt: "20px",
  mb: "40px",
  color: "#565656",
  marginTop: "20px",
  fontFamily: "UniteaSans",
  textAlign: "center",
};

const PriceList = ({ items, content, phoneNumber }: Props) => {
  const priceListContent = content ? content : websiteData.homepageContent;
  const { priceList_h2, priceList_h3, priceList_text } = priceListContent;

  return (
    <BackgroundWrapper bgColor={theme.palette.custom.blueLight}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={sectionXPadding}
      >
        <SectionCenterHeader
          topHeader="CENNIK"
          bottomHeader={priceList_text}
          header={priceList_h2}
        />
        <Box sx={contentSx}>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                my: 1,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  whiteSpace: "nowrap",
                  minWidth: "250px",
                  fontSize: "18px",
                }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  borderBottom: 1,
                  borderColor: "grey.300",
                  mx: 2,
                }}
              />
              <Typography sx={{ fontWeight: "bold" }}>{item.price}</Typography>
            </Box>
          ))}
        </Box>
        <Typography sx={bottomHeaderSx} variant="h3">
          {priceList_h3}
        </Typography>
        <CallUsButton phoneNumber={phoneNumber} />
      </Box>
    </BackgroundWrapper>
  );
};

export default PriceList;
