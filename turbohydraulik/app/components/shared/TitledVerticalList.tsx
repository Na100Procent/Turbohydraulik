import theme from "@/app/theme/theme";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export interface LinkElement {
  title: string;
  url: string;
}
interface Props {
  title: string;
  list: LinkElement[];
  separator?: string;
  addSx?: SxProps<Theme>;
}

const elementSx = {
  fontWeight: "300",
  fontSize: "14px",
  mb: "20px",
  display: "flex",
  gap: "10px",
  opacity: 0.8,
  transition: "background-color 0.3s ease",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(15, 14, 14, 0.1)",
  },
  padding: "5px",
  borderRadius: "5px",
};

const containerSx = {
  color: theme.palette.custom.background,
};

const TitledVerticalList = ({ title, list, separator, addSx }: Props) => {
  return (
    <Box sx={{ ...containerSx, ...addSx }}>
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
