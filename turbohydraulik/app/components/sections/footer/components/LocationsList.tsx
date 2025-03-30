import theme from "@/app/theme/theme";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export interface LinkElement {
  title: string;
  url: string;
}

interface Props {
  locsTitle?: string;
  locationsList: LinkElement[];
  separator?: string;
  addSx?: SxProps<Theme>;
}

const elementSx = {
  fontWeight: "300",
  fontSize: "14px",
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
  fontFamily: "UniteaSans",
  fontWeight: 500,
  fontSize: "18px",
  maxWidth: "300px",
};

const TitledVerticalList = ({
  locsTitle,
  locationsList,
  separator,
  addSx,
}: Props) => {
  return (
    <Box sx={{ ...containerSx, ...addSx }}>
      {locsTitle && (
        <Typography
          fontWeight="600"
          mb="30px"
          fontSize="20px"
          sx={{ fontFamily: "UniteaSans" }}
        >
          {locsTitle}
        </Typography>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "20px",
          "@media (max-width: 900px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
          "@media (max-width: 600px)": { gridTemplateColumns: "1fr" },
        }}
      >
        {locationsList?.map((item, index) => (
          <Link href={item.url} key={item.title + index} passHref>
            <Box sx={elementSx}>
              <Typography>{separator ? separator : "• "}</Typography>
              <Typography sx={itemTitle}>{item.title}</Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default TitledVerticalList;
