import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

const SubHeaders = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography
        variant="h4"
        color={theme.palette.primary.main}
        fontWeight="700"
        fontFamily="UniteaSans"
      >
        Wszystkie opinie o Turbohydraulik
      </Typography>
      <Typography
        mt="20px"
        color={theme.palette.custom.darkGray}
        fontFamily="UniteaSans"
        fontSize="18px"
        fontWeight="500"
        sx={{ opacity: 0.8 }}
      >
        Profesjonalizm i uczciwość to cechy, które wyróżniają tę firmę. Jestem
        bardzo zadowolony z usługi.
      </Typography>
    </Box>
  );
};

export default SubHeaders;
