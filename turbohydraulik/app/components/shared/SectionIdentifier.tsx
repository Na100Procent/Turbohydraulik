import { SectionType } from "@/app/data/types/sectionTypes";
import { Box } from "@mui/material";
import React from "react";

interface Props {
  sectionId: SectionType;
  customOffset?: number;
}
const SectionIdentifier = ({ sectionId, customOffset }: Props) => (
  <Box
    id={sectionId}
    sx={{ position: "absolute", mt: customOffset ? customOffset : "-150px" }}
  />
);

export default SectionIdentifier;
