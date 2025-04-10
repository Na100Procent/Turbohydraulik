"use client";
import React, { useEffect, useRef, useState } from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import Policy from "./Policy";
import { Box, Fade } from "@mui/material";
import ContactElements from "./ContactElements";
import HorizontalSeparator from "./components/HorizontalSeparator";
import LinksAndServices from "./components/LinksAndServices";
import SocialMediasSeparator from "./components/SocialMediasSeparator";
import { YellowRightOrnament } from "@/public/assets/icons/icons";
import { sectionIds } from "@/app/constants/appConstants";
import SectionIdentifier from "../../shared/SectionIdentifier";
import { CityData } from "@/app/data/types/dataTypes";

interface Props {
  phoneNumber?: string;
  postalCode?: string;
  street?: string;
  cityData?: CityData;
}

const Footer = ({ phoneNumber, postalCode, street, cityData }: Props) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const address =
    postalCode && cityData?.name && street
      ? `${postalCode} ${cityData.name}, ${street}`
      : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <BackgroundWrapper
      bgColor={theme.palette.primary.main}
      sx={{ padding: "0", mt: "100px" }}
    >
      <SectionIdentifier sectionId={sectionIds.contact} />
      <Box ref={footerRef}>
        <Fade in={isVisible} timeout={800}>
          <Box
            padding={"250px 0 0 0"}
            display={"flex"}
            flexDirection={"column"}
            gap="50px"
            position={"relative"}
          >
            <ContactElements
              phoneNumber={phoneNumber}
              address={address}
              cityData={cityData}
            />
            <HorizontalSeparator />
            <LinksAndServices cityData={cityData} />
            <SocialMediasSeparator />
            <Policy />
            <Box position={"absolute"} top={"-130px"} left={"-10px"}>
              <YellowRightOrnament />
            </Box>
          </Box>
        </Fade>
      </Box>
    </BackgroundWrapper>
  );
};

export default Footer;
