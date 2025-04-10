import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React, { JSX } from "react";

interface ContactFormProps {
  subHeader: string;
  header: string;
  icon: JSX.Element;
}

const subHeaderSx = {
  fontWeight: "400",
  fontSize: "11px",
  color: theme.palette.custom.background,
};

const headerSx = {
  fontWeight: "600",
  fontSize: "17px",
  color: theme.palette.custom.background,
};

const ContactForm = ({ subHeader, header, icon }: ContactFormProps) => {
  return (
    <Box display={"flex"} alignItems={"top"} gap={"10px"}>
      <Box
        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.custom.darkBlue,
          background: theme.palette.secondary.main,
          padding: "5px",
          borderRadius: "5px",
          mt: "10px",
        }}
      >
        {icon}
      </Box>
      <Box
        padding={"10px 0"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"top"}
      >
        <Typography sx={subHeaderSx}>{subHeader}</Typography>
        <Typography sx={headerSx}>{header}</Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
