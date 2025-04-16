"use client";
import React from "react";
import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import theme from "@/app/theme/theme";
import { emailAddress, facebookUrl } from "@/app/constants/appConstants";
import Link from "next/link";

interface Props {
  separatorColor?: string;
}
const iconBtn = {
  borderRadius: "50%",
  margin: "0 5px",
  "&:hover": {
    backgroundColor: theme.palette.custom.blueLight,
    color: theme.palette.primary.main,
  },
  transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
};
const SocialMediasSeparator = ({ separatorColor }: Props) => {
  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`);
  };
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box flex="1">
        <Box
          width="85%"
          borderTop={`1px solid ${separatorColor ? separatorColor : "white"}`}
          padding="10px 0"
          sx={{ opacity: 0.4, margin: "0 auto" }}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mx={2}
        mt="-20px"
      >
        <Link href={facebookUrl} target="_blank" aria-label="nawiguj facebook">
          <IconButton
            aria-label="Facebook"
            sx={{
              backgroundColor: theme.palette.custom.darkBlue,
              color: "white",
              ...iconBtn,
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Link>
        <IconButton
          aria-label="Email"
          onClick={handleEmailClick}
          sx={{
            backgroundColor: theme.palette.custom.darkBlue,
            color: "white",
            ...iconBtn,
          }}
        >
          <EmailIcon />
        </IconButton>
      </Box>
      <Box flex="1">
        <Box
          width="85%"
          borderTop={`1px solid ${separatorColor ? separatorColor : "white"}`}
          padding="10px 0"
          sx={{ opacity: 0.4, margin: "0 auto" }}
        />
      </Box>
    </Box>
  );
};

export default SocialMediasSeparator;
