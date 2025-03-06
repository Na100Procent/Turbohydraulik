import TitledVerticalList from "@/app/components/shared/TitledVerticalList";
import { Box } from "@mui/material";
import React from "react";
import FailureForm from "./FailureForm";

const LinksAndServices = () => {
  return (
    <Box display={"flex"} padding={"0 100px"} justifyContent={"space-between"}>
      <TitledVerticalList
        title="QUICK LINKS"
        list={["Home", "About Us", "Services", "Contact Us", "Privacy Policy"]}
      />
      <TitledVerticalList
        title="SERVICES"
        list={[
          "Hydraulic Repair",
          "Hydraulic Maintenance",
          "Hydraulic Design",
          "Hydraulic Installation",
          "Hydraulic Troubleshooting",
        ]}
      />
      <FailureForm />
    </Box>
  );
};

export default LinksAndServices;
