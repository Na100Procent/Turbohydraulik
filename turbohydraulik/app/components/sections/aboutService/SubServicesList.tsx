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
  gridTemplateColumns: {
    xl: "repeat(2, 420px)",
    lg: "repeat(2, 320px)",
    md: "repeat(2, 430px)",
    sm: "repeat(2, 400px)",
    xs: "repeat(2, 350px)",
    xxs: "repeat(2, 250px)",
  },

  gridTemplateRows: {
    xl: "repeat(2, 450px)",
    lg: "repeat(2, 550px)",
    md: "repeat(2, 430px)",
    sm: "repeat(2, 400px)",
    xs: "repeat(2, 550px)",
    xxs: "repeat(2, 550px)",
  },
  gap: "20px",
  justifyContent: "center",
  mt: "10px",
};
const SubServicesList = ({ subServices }: Props) => {
  const subServicesList = subServices.map((subService) => {
    return (
      <SubServiceCard
        key={subService.name}
        subService={{
          name: subService.name,
          slug: "",
          description: subService.description,
        }}
      />
    );
  });
  return <Box sx={containerSx}>{subServicesList}</Box>;
};

export default SubServicesList;
