import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import TopMenuButton from "./components/TopMenuButton";
import theme from "@/app/theme/theme";
import { sectionIds } from "@/app/constants/appConstants";

interface Props {
  isVertical?: boolean;
  withSeparators?: boolean;
  addSx?: SxProps<Theme>;
  onButtonClick?: () => void;
}

const TopMenuButtons = ({
  isVertical,
  withSeparators,
  addSx,
  onButtonClick,
}: Props) => {
  const Separator = () => (
    <Typography
      sx={{
        color: theme.palette.custom.darkGray,
        fontSize: "40px",
        display: withSeparators ? "block" : "none",
      }}
    >
      .
    </Typography>
  );

  const container: SxProps<Theme> = {
    display: "flex",
    alignItems: "end",
    flexDirection: isVertical ? "column" : "row",
    justifyContent: "center",
    gap: {
      xl: "15px",
      lg: "15px",
      md: "0px",
    },
  };
  return (
    <Box
      sx={{ ...container, ...(addSx && { ...addSx }) }}
      onClick={onButtonClick && onButtonClick}
      aria-label="nawiguj do sekcji"
    >
      <TopMenuButton title="Home" section={sectionIds.home} />
      <Separator />
      <TopMenuButton title="O nas" section={sectionIds.about} />
      <Separator />
      <TopMenuButton title="Opinie" section={sectionIds.reviews} />
      <Separator />
      <TopMenuButton title="Prace" section={sectionIds.projects} />
      <Separator />
      <TopMenuButton title="FAQ's" section={sectionIds.faq} />
    </Box>
  );
};

export default TopMenuButtons;
