import { SubService } from "@/app/data/types/dataTypes";
import React from "react";
import { Box } from "@mui/material";
import SubServiceCard from "./SubServiceCard";

interface Props {
  subServices: SubService[];
}
const containerSx = {
  display: {
    xl: "grid",
    lg: "grid",
    md: "grid",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  gridTemplateColumns: "repeat(2, 320px)",
  gridTemplateRows: "repeat(2, 300px)",
  gap: "20px",
  justifyContent: "center",
  mt: "10px",
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
