import TitledVerticalList, {
  LinkElement,
} from "@/app/components/shared/TitledVerticalList";
import { Box } from "@mui/material";
import React from "react";
import ServiceForm from "./ServiceForm";
import { sectionXPadding } from "@/app/constants/styles";
import OpenHours from "./OpenHours";
import { CityData } from "@/app/data/types/dataTypes";
import { getServicesOfCity } from "@/app/components/shared/helpers/getServicesOfCity";
import { citiesData } from "@/app/data/data";
interface Props {
  cityData?: CityData;
}

const containerSx = {
  display: "flex",
  padding: sectionXPadding,
  justifyContent: "space-between",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  alignItems: "top",
  gap: {
    xl: "100px",
    lg: "30px",
    md: "0",
    sm: "0",
    xs: "0",
    xxs: "0",
  },
};

const linkListsSx = {
  display: "flex",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  justifyContent: "space-between",
  width: "100%",
  gap: {
    xl: "80px",
    lg: "20px",
    md: "50px",
    sm: "20px",
    xs: "20px",
    xxs: "10px",
  },
  mb: "40px",
};

const LinksAndServices = ({ cityData }: Props) => {
  const servicesOfCity = getServicesOfCity(cityData);
  const servicesNamesUrls: LinkElement[] = servicesOfCity.map((service) => ({
    title: service.name,
    url: cityData ? `/${cityData.slug}/${service.slug}` : `/${service.slug}`,
  }));

  const locations = cityData ? cityData.districts : citiesData;

  const locationsNamesUrls: LinkElement[] = Object.values(locations)
    .map((city) => ({
      title: city.name,
      url: cityData ? `/${cityData.slug}/${city.slug}` : `/${city.slug}`,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Box sx={containerSx}>
      <Box sx={linkListsSx}>
        <TitledVerticalList title="LOKALIZACJE" list={locationsNamesUrls} />
        <TitledVerticalList title="USŁUGI" list={servicesNamesUrls} />
        <OpenHours cityName={cityData?.name} />
      </Box>

      <ServiceForm />
    </Box>
  );
};

export default LinksAndServices;
