import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

const container = {
  padding: "40px 50px",
  color: theme.palette.primary.main,
  background: theme.palette.custom.lightGray,
  borderRadius: "10px",
};

const OurMission = () => {
  return (
    <Box sx={container}>
      <Typography
        sx={{ fontWeight: "600", fontSize: "30px", fontFamily: "UniteaSans" }}
      >
        About work here
      </Typography>
      <Typography
        mt="15px"
        sx={{ fontFamily: "UniteaSans", fontWeight: "500" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        corrupti enim ipsa repudiandae aperiam accusamus similique expedita vero
        blanditiis doloribus! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Esse, dolor!
      </Typography>
    </Box>
  );
};

export default OurMission;
