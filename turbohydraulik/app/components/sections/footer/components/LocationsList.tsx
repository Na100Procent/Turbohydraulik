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
  alignItems?: "start" | "center";
}

const containerSx = {
  color: theme.palette.custom.background,
  maxWidth: "100%",
  display: "flex",

  alignItems: {
    xl: "start",
    lg: "start",
    md: "start",
    sm: "center",
    xs: "center",
    xxs: "center",
  },
};

const itemTitle = {
  fontWeight: 500,
  fontSize: "18px",
  maxWidth: "300px",
};

const TitledVerticalList = ({
  locsTitle,
  locationsList,
  separator,
  addSx,
  alignItems,
}: Props) => {
  const elementSx = {
    fontWeight: "300",
    fontSize: "14px",
    display: "flex",
    gap: "20px",

    transition: "background-color 0.3s ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(15, 14, 14, 0.1)",
    },
    padding: "5px",
    borderRadius: "5px",
    minWidth: {
      xl: "auto",
      lg: "auto",
      md: "auto",
      sm: alignItems ? "150px" : "auto",
      xs: alignItems ? "150px" : "auto",
      xxs: alignItems ? "150px" : "auto",
    },
  };

  return (
    <Box sx={{ ...containerSx, ...addSx, flexDirection: "column" }}>
      {locsTitle && (
        <Typography
          fontWeight="200"
          py="20px"
          fontSize="22px"
          textAlign={"center"}
          color={theme.palette.custom.darkGray}
        >
          {locsTitle}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: alignItems ? alignItems : "center",
          gap: "20px",
        }}
      >
        {locationsList?.map((item, index) => (
          <Link
            href={item.url}
            key={item.title + index}
            passHref
            aria-label="Nawiguj do miasta"
          >
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
