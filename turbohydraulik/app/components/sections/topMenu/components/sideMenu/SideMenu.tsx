"use client";

import { Box, Drawer } from "@mui/material";
import { useEffect } from "react";
import SideMenuContent from "./SideMenuContent";

interface Props {
  menuOpened: boolean;
  handleDrawerToggle: () => void;
}

const SideMenu = ({ menuOpened, handleDrawerToggle }: Props) => {
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const drawerPaper = document.querySelector(".MuiDrawer-paper");
      if (drawerPaper && !drawerPaper.contains(event.target as Node)) {
        handleDrawerToggle();
      }
    };

    if (menuOpened) {
      setTimeout(() => {
        document.addEventListener("pointerdown", handlePointerDown);
      }, 100);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [menuOpened, handleDrawerToggle]);

  return (
    <Drawer
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
        <SideMenuContent />
      </Box>
    </Drawer>
  );
};

export default SideMenu;
