import TitledVerticalList, {
  LinkElement,
} from "@/app/components/shared/TitledVerticalList";
import { SxProps, Theme } from "@mui/material";
import React from "react";

interface Props {
  locsTitle?: string;
  addSx?: SxProps<Theme>;
  locationsList: LinkElement[];
}
const LocationsList = ({ locsTitle, addSx, locationsList }: Props) => {
  return (
    <>
      {locationsList ? (
        <TitledVerticalList
          title={locsTitle ? locsTitle : "LOKALIZACJE"}
          addSx={addSx}
          list={locationsList}
        />
      ) : null}
    </>
  );
};

export default LocationsList;
