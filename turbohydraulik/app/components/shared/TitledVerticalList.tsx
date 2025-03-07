import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface LinkElement {
  title: string;
  url: string;
}
interface Props {
  title: string;
  list: LinkElement[];
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
        <Link href={item.url} key={item.title + index}>
          <Box sx={elementSx}>
            <Typography mt="-2px"> {separator ? separator : "> "}</Typography>
            <Typography sx={{ fontFamily: "UniteaSans", fontWeight: 500 }}>
              {item.title}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default TitledVerticalList;
