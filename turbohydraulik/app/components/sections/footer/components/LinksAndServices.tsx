import TitledVerticalList from "@/app/components/shared/TitledVerticalList";
import { Box } from "@mui/material";
import React from "react";

const LinksAndServices = () => {
  return (
    <Box display={"flex"} gap={"80px"} padding={"0 80px"}>
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
    </Box>
  );
};

export default LinksAndServices;
