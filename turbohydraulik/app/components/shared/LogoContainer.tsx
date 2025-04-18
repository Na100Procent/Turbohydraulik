import { homePagePath } from "@/app/constants/appConstants";
import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {
  notNavigateHome?: boolean;
  small?: boolean;
}

const LogoContainer = ({ notNavigateHome, small }: Props) => {
  const headerSx = {
    fontSize: {
      xl: "50px",
      lg: "50px",
      md: small ? "25px" : "40px",
      sm: small ? "25px" : "40px",
      xs: small ? "25px" : "40px",
    },
    fontWeight: 700,
    letterSpacing: "-0.8px",
    lineHeight: "95%",
  };

  const logoContent = (
    <Box padding="10px 20px 5px 10px">
      <Typography color={theme.palette.primary.main} sx={headerSx}>
        turbo
      </Typography>
      <Typography color={theme.palette.primary.main} sx={headerSx}>
        hydraulik
      </Typography>
    </Box>
  );

  if (notNavigateHome) {
    return logoContent;
  }

  return (
    <Link href={homePagePath} aria-label="strona home page">
      {logoContent}
    </Link>
  );
};

export default LogoContainer;
