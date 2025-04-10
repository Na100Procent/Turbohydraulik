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
  wrappedStyle?: boolean;
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

const itemTitle = {
  fontWeight: 500,
  fontSize: "18px",
  maxWidth: "300px",
};

const TitledVerticalList = ({ title, list, separator, addSx }: Props) => {
  return (
    <Box sx={{ ...containerSx, ...addSx }}>
      <Typography fontWeight="600" mb="30px" fontSize={"20px"} sx={{}}>
        {title}
      </Typography>

      {list?.map((item, index) => (
        <Link
          href={item.url}
          key={item.title + index}
          aria-label={`nawiguj do ${item.title} `}
        >
          <Box sx={elementSx}>
            <Typography> {separator ? separator : "> "}</Typography>
            <Typography sx={itemTitle}>{item.title}</Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default TitledVerticalList;
