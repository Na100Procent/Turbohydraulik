"use client";
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "@/app/theme/theme";
import SideMenu from "./sideMenu/SideMenu";
import LogoContainer from "@/app/components/shared/LogoContainer";

const containerSx = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingX: "10px",
};

const TopMenuMobile = () => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

  const handleDrawerToggle = () => {
    setIsSideMenuOpened((prev) => !prev);
  };

  return (
    <Box sx={containerSx}>
      <LogoContainer small />

      <IconButton
        aria-label="menu"
        sx={{ mr: "20px", color: theme.palette.primary.main }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <SideMenu
        menuOpened={isSideMenuOpened}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
};

export default TopMenuMobile;
