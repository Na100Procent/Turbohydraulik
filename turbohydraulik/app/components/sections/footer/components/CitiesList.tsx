import TitledVerticalList, {
  LinkElement,
} from "@/app/components/shared/TitledVerticalList";
import { websiteData } from "@/app/data/data";
import { SxProps, Theme } from "@mui/material";
import React from "react";

interface Props {
  locsTitle?: string;
  addSx?: SxProps<Theme>;
}
const CitiesList = ({ locsTitle, addSx }: Props) => {
  const cityNamesUrls: LinkElement[] = Object.values(websiteData.cities).map(
    (city) => ({
      title: city.name,
      url: `/${city.slug}`,
    })
  );
  return (
    <TitledVerticalList
      title={locsTitle ? locsTitle : "LOKALIZACJE"}
      addSx={addSx}
      list={cityNamesUrls}
    />
  );
};

export default CitiesList;
