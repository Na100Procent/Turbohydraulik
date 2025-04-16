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
  width: "150px",

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
}: Props) => {
  return (
    <Box sx={{ ...containerSx, ...addSx, flexDirection: "column" }}>
      {locsTitle && (
        <Typography
          fontWeight="200"
          pt="20px"
          pb="50px"
          fontSize="22px"
          color={theme.palette.custom.darkGray}
        >
          {locsTitle}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xl: "start",
            lg: "start",
            md: "start",
            sm: "start",
            xs: "center",
            xxs: "center",
          },
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
