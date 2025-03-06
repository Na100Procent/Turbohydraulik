import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  list: string[];
  separator?: string;
}

const elementSx = {
  fontWeight: "300",
  fontSize: "14px",
  mb: "20px",
  display: "flex",
  gap: "10px",
  opacity: 0.8,
};

const TitledVerticalList = ({ title, list, separator }: Props) => {
  return (
    <Box color={theme.palette.custom.background}>
      <Typography
        fontWeight="600"
        mb="30px"
        fontSize={"20px"}
        sx={{ fontFamily: "UniteaSans" }}
      >
        {title}
      </Typography>

      {list.map((item, index) => (
        <Box key={index} sx={elementSx}>
          <Typography> {separator ? separator : "> "}</Typography>
          <Typography sx={{ fontFamily: "UniteaSans", fontWeight: 500 }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TitledVerticalList;
