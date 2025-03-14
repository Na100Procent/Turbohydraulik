import { SubService } from "@/app/data/types/dataTypes";
import React from "react";
import { Box } from "@mui/material";
import SubServiceCard from "./SubServiceCard";

interface Props {
  subServices: SubService[];
}
const containerSx = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
    xxs: "column",
  },

  gap: "10px",
  justifyContent: {
    xl: "left",
    lg: "left",
    md: "center",
    sm: "center",
    xs: "center",
    xxs: "center",
  },

  width: "100%",
  alignItems: "center",
};
const SubServicesList = ({ subServices }: Props) => {
  const subServicesList = subServices.map((subService) => {
    return (
      <SubServiceCard
        key={subService.name}
        service={{
          name: subService.name,
          slug: "",
        }}
      />
    );
  });
  return <Box sx={containerSx}>{subServicesList}</Box>;
};

export default SubServicesList;
