import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

const container = {
  padding: "40px 50px",
  color: theme.palette.primary.main,
  background: "rgba(207, 219, 228, 0.59)",
  borderRadius: "10px",
};

const OurMission = () => {
  return (
    <Box sx={container}>
      <Typography
        sx={{ fontWeight: "600", fontSize: "30px", fontFamily: "UniteaSans" }}
      >
        Nasza misja
      </Typography>
      <Typography
        mt="15px"
        sx={{ fontFamily: "UniteaSans", fontWeight: "500" }}
      >
        Naszą misją jest świadczenie usług hydraulicznych na najwyższym
        poziomie, które spełniają oczekiwania naszych klientów. Skupiamy się na
        terminowości, precyzji i bezpieczeństwie, dbając o każdy szczegół
        realizowanych zleceń. Satysfakcja klienta jest dla nas najwyższą
        wartością, dlatego podejmujemy się nawet najbardziej wymagających zadań.
      </Typography>
    </Box>
  );
};

export default OurMission;
