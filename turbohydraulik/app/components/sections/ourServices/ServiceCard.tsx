"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import { CityData } from "@/app/data/types/dataTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceCardUrl } from "@/app/constants/imagesUrls";

interface Props {
  city?: CityData;
  service: {
    name: string;
    slug: string;
    serviceImgUrl?: string;
    cardDescription: string;
  };
}

const container = {
  width: {
    xl: "400px",
    lg: "400px",
    md: "400px",
    sm: "400px",
    xs: "310px",
    xxs: "310px",
  },
  height: {
    xl: "400px",
    lg: "400px",
    md: "400px",
    sm: "auto",
    xs: "auto",
    xxs: "auto",
  },

  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: theme.palette.custom.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: {
    xl: "10px 20px 50px 20px",
    lg: "10px 20px 50px 20px",
    md: "10px 20px 50px 20px",
    sm: "10px 20px 20px 20px",
    xs: "10px 20px 10px 20px",
    xxs: "10px 20px 10px 20px",
  },
  transition: "background-color 0.3s ease, scale 0.3s ease",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(243, 239, 239, 0.9)",
    scale: 1.05,
  },
};

const imgSx = {
  marginTop: "10px",
  height: "100%",
  maxHeight: {
    xl: "200px",
    lg: "200px",
    md: "200px",
    sm: "200px",
    xs: "200px",
    xxs: "200px",
  },
  objectFit: "cover",
};

const titleSx = {
  fontWeight: "bold",
  color: theme.palette.primary.main,
  width: "100%",
  mt: "20px",
  textAlign: "left",
  fontSize: "20px",
};

const descriptionSx = {
  color: theme.palette.custom.darkGray,
  maxWidth: "400px",
  fontFamily: "UniteaSans",
  fontWeight: 500,
  mt: "10px",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: {
    xs: 3,
    sm: 3,
    md: 5,
    lg: 5,
    xl: 5,
  },
};

const ServiceCard = ({ city, service }: Props) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  let newPath = `/${service.slug}`;
  if (pathSegments.length > 0 && city?.slug) {
    newPath = `/${city.slug}/${service.slug}`;
  }

  const cityTitle = city ? city.name : "";
  const serviceImg = service.serviceImgUrl || serviceCardUrl;

  return (
    <Link href={newPath}>
      <Box sx={container}>
        <Box
          component="img"
          src={serviceImg}
          sx={imgSx}
          alt={`Turbo hydraulik ${cityTitle} ${service.name}`}
        />
        <Typography variant="h3" sx={titleSx}>
          {service.name}
        </Typography>
        <Typography sx={descriptionSx}>{service.cardDescription}</Typography>
      </Box>
    </Link>
  );
};

export default ServiceCard;
