import TitledVerticalList from "@/app/components/shared/TitledVerticalList";
import { Box } from "@mui/material";
import React from "react";
import FailureForm from "./FailureForm";
import { cities, services } from "@/app/data/data";

interface LinkElement {
  title: string;
  url: string;
}

const LinksAndServices = () => {
  const cityNamesUrls: LinkElement[] = cities.slice(1).map((city) => ({
    title: city.name,
    url: `/${city.slug}`,
  }));

  const servicesNamesUrls: LinkElement[] = services.map((service) => ({
    title: service.name,
    url: `/${service.slug}`,
  }));
  return (
    <Box display={"flex"} padding={"0 100px"} justifyContent={"space-between"}>
      <TitledVerticalList title="QUICK LINKS" list={cityNamesUrls} />
      <TitledVerticalList title="SERVICES" list={servicesNamesUrls} />
      <FailureForm />
    </Box>
  );
};

export default LinksAndServices;
