import VerticalSeparator from "@/app/components/shared/VerticalSeparator";
import theme from "@/app/theme/theme";
import { Box, IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { facebookUrl } from "@/app/constants/appConstants";

const socialMediasSx = {
  justifyContent: "center",
  alignItems: "center",
  mx: 2,
  display: {
    xl: "flex",
    lg: "flex",
    md: "flex",
    sm: "flex",
    xs: "none",
    xxs: "none",
  },
  gap: "24px",
  padding: "12px 0",
};

const iconBtn = {
  padding: "12px",
  minWidth: "48px",
  minHeight: "48px",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  zIndex: 3,
  backgroundColor: theme.palette.custom.darkBlue,
  color: "white",
  "&:hover": {
    background: theme.palette.custom.blueLight,
    color: theme.palette.primary.main,
  },
  transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const socialIconSx = {
  width: "24px",
  height: "24px",
};

const SocialMedias = () => {
  return (
    <Box sx={socialMediasSx}>
      <VerticalSeparator />

      <Link
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        style={{ display: "inline-flex" }}
      >
        <IconButton aria-label="Facebook" sx={iconBtn}>
          <FacebookIcon sx={socialIconSx} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SocialMedias;
