import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  aboutUs_h3_2: string;
  aboutUs_text_2: string;
}
const container = {
  padding: "40px 50px",
  color: theme.palette.primary.main,
  background: "rgba(207, 219, 228, 0.59)",
  borderRadius: "10px",
};

const OurMission = ({ aboutUs_h3_2, aboutUs_text_2 }: Props) => {
  return (
    <Box sx={container}>
      <Typography variant="h3" sx={{ fontWeight: "600", fontSize: "30px" }}>
        {aboutUs_h3_2}
      </Typography>
      <Typography mt="15px" sx={{ fontWeight: "500" }}>
        {aboutUs_text_2}
      </Typography>
    </Box>
  );
};

export default OurMission;
