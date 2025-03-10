"use client";
import React, { useState } from "react";
import { TopMenuLogo } from "@/public/assets/icons/icons";
import Link from "next/link";
import { homePagePath } from "@/app/constants/appConstants";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "@/app/theme/theme";
import SideMenu from "./sideMenu/SideMenu";

const containerSx = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const TopMenuMobile = () => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

  const handleDrawerToggle = () => {
    setIsSideMenuOpened((prev) => !prev);
  };

  return (
    <Box sx={containerSx}>
      <Link href={homePagePath}>
        <Box sx={{ scale: 0.6 }}>
          <TopMenuLogo />
        </Box>
      </Link>
      <IconButton
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
