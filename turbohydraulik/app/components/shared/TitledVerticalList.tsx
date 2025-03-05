import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  list: string[];
  separator?: string;
}
const TitledVerticalList = ({ title, list, separator }: Props) => {
  return (
    <Box color={theme.palette.custom.background}>
      <Typography fontWeight="600" mb="30px" fontSize={"20px"}>
        {title}
      </Typography>

      {list.map((item, index) => (
        <Box
          key={index}
          fontWeight="300"
          fontSize={"14px"}
          mb="20px"
          display={"flex"}
          gap={"10px"}
        >
          <span> {separator ? separator : "> "}</span>
          <span>{item}</span>
        </Box>
      ))}
    </Box>
  );
};

export default TitledVerticalList;
