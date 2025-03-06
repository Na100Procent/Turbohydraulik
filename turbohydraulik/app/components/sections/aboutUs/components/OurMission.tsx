import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

const OurMission = () => {
  return (
    <Box
      sx={{
        padding: "40px 50px",
        color: theme.palette.primary.main,
        background: "#f0f4f7",
      }}
    >
      <Typography
        sx={{ fontWeight: "600", fontSize: "30px", fontFamily: "UniteaSans" }}
      >
        Our Mission
      </Typography>
      <Typography
        mt="15px"
        sx={{ fontFamily: "UniteaSans", fontWeight: "500" }}
      >
        Our mission is to provide the highest level of plumbing services that
        meet the expectations of our customers. We focus on timeliness,
        precision and safety, taking care of every detail of the orders we carry
        out. Customer satisfaction is our highest value, which is why we
        undertake even the most demanding tasks.
      </Typography>
    </Box>
  );
};

export default OurMission;
