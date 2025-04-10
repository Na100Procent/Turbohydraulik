"use client";
import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";

interface Props {
  hero_h1: string;
  hero_h2: string;
  hero_text: string;
}

const headerSx = {
  fontWeight: "600",
  lineHeight: 1,
  fontSize: {
    xl: "60px",
    lg: "60px",
    md: "50px",
    sm: "50px",
    xs: "40px",
    xxs: "35px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  flexDirection: "column",
};

const HeaderBox = ({ hero_h1, hero_h2, hero_text }: Props) => {
  const [headerPart1, headerPart2] = useMemo(() => {
    const words = hero_h1.trim().split(" ");
    return [words.slice(0, -1).join(" "), words.at(-1) ?? ""];
  }, [hero_h1]);

  return (
    <Box sx={{ color: theme.palette.custom.background }}>
      <Typography variant="h1" sx={headerSx}>
        <Box component="span">{headerPart1} </Box>
        <Box component="span" sx={{ color: theme.palette.secondary.main }}>
          {headerPart2}
        </Box>
      </Typography>
      <Typography my="15px" variant="h2" fontSize={"30px"}>
        {hero_h2}
      </Typography>
      <Typography my="15px">{hero_text}</Typography>
    </Box>
  );
};

export default HeaderBox;
