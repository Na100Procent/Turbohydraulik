"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Fade } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { CityData } from "@/app/data/types/dataTypes";
import { getServicesOfCity } from "../../shared/helpers/getServicesOfCity";

interface Props {
  city?: CityData;
}

const ServiceContainer = ({ city }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const servicesOfCity = getServicesOfCity(city);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box ref={containerRef}>
      <Fade in={isVisible} timeout={800}>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={"20px"}
        >
          {servicesOfCity.map((service, index) => (
            <Box key={index} sx={{ margin: "0 10px" }}>
              <ServiceCard
                service={{
                  name: service.name,
                  slug: service.slug,
                  serviceImgUrl: service.cardImageUrl,
                  cardDescription: service.cardDescription,
                }}
                city={city}
              />
            </Box>
          ))}
        </Box>
      </Fade>
    </Box>
  );
};

export default ServiceContainer;
