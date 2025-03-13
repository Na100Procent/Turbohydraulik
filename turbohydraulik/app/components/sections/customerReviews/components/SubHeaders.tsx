import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  testimonials_h3: string;
  testimonials_text_2: string;
}
const SubHeaders = ({ testimonials_h3, testimonials_text_2 }: Props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography
        variant="h4"
        color={theme.palette.primary.main}
        fontWeight="700"
        fontFamily="UniteaSans"
      >
        {testimonials_h3}
      </Typography>
      <Typography
        mt="20px"
        color={theme.palette.custom.darkGray}
        fontFamily="UniteaSans"
        fontSize="18px"
        fontWeight="500"
        sx={{ opacity: 0.8 }}
      >
        {testimonials_text_2}
      </Typography>
    </Box>
  );
};

export default SubHeaders;
