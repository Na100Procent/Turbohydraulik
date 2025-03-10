import React from "react";
import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import theme from "@/app/theme/theme";

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
        <IconButton
          sx={{
            backgroundColor: theme.palette.custom.darkBlue,
            color: "white",
            ...iconBtn,
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            ...iconBtn,
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
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
