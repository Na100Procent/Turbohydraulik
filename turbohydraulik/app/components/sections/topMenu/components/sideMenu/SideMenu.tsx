"use client";

import { Box, Drawer } from "@mui/material";
import { useEffect, useRef } from "react";
import SideMenuContent from "./SideMenuContent";

interface Props {
  menuOpened: boolean;
  handleDrawerToggle: () => void;
}

const SideMenu = ({ menuOpened, handleDrawerToggle }: Props) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        handleDrawerToggle();
      }
    };

    if (menuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [menuOpened, handleDrawerToggle]);

  return (
    <Drawer
      ref={drawerRef}
      hideBackdrop={false}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          minWidth: "250px",
          width: "65%",
        },
      }}
      variant="temporary"
      anchor="right"
      open={menuOpened}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
    >
      <Box sx={{ padding: "20px", height: "100%" }}>
        <SideMenuContent handleDrawerToggle={handleDrawerToggle} />
      </Box>
    </Drawer>
  );
};

export default SideMenu;
