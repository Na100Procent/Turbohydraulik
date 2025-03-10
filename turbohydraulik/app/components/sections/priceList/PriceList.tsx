import { Box, Typography } from "@mui/material";
import React from "react";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import { CityData } from "@/app/data/types";
import CallUsButton from "../../shared/CallUsButton";

interface Props {
  items: { title: string; price: string }[];
  city?: CityData;
}

const contentSx = {
  width: "100%",
  maxWidth: 900,
  mx: "auto",
  my: 2,
  color: theme.palette.primary.main,
};
const PriceList = ({ items, city }: Props) => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.blueLight}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <SectionCenterHeader
          topHeader="CENNIK"
          topHeaderColor={theme.palette.secondary.main}
          header={`Ceny naszych usług ${city ? "w mieście " + city.name : ""}`}
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
              <Typography sx={{ whiteSpace: "nowrap", minWidth: "250px" }}>
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
        <CallUsButton />
      </Box>
    </BackgroundWrapper>
  );
};

export default PriceList;
