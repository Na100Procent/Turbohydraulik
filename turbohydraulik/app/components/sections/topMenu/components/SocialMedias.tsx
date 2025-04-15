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
  gap: "10px",
  padding: "8px 0",
};
const socialIconSx = {
  width: "20px",
  height: "20px",
};

const iconBtn = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  margin: "0 5px",
  zIndex: 3,
  "&:hover": {
    background: theme.palette.custom.blueLight,
    color: theme.palette.primary.main,
  },
  transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
};

const SocialMedias = () => {
  return (
    <Box sx={socialMediasSx}>
      <VerticalSeparator />
      <Link href={facebookUrl} target="_blank" aria-label="nawiguj facebook">
        <IconButton
          aria-label="Facebook"
          sx={{
            backgroundColor: theme.palette.custom.darkBlue,
            color: "white",
            ...iconBtn,
          }}
        >
          <FacebookIcon sx={socialIconSx} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SocialMedias;
