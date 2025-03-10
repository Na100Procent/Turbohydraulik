import RectangularButton from "@/app/components/shared/RectangularButton";
import theme from "@/app/theme/theme";
import { Box, Input, Typography } from "@mui/material";
import React from "react";

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  maxWidth: "400px",
};

const headerSx = {
  fontWeight: "600",
  fontSize: "17px",
  color: theme.palette.custom.background,
  fontFamily: "UniteaSans",
  mb: "10px",
};

const phoneInput = {};

const input = {
  background: theme.palette.custom.background,
  color: theme.palette.custom.darkBlue,
  "&:focus": {
    boxShadow: "none",
    borderColor: "transparent",
  },
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
  padding: "10px 20px",
};

const problemInput = {
  minHeight: "100px",
  display: "flex",
  alignItems: "flex-start",
};

const FailureForm = () => {
  return (
    <Box sx={container}>
      <Typography variant="h6" sx={headerSx}>
        SUBSCRIBE OUR NEWSLETTER
      </Typography>
      <Input
        disableUnderline
        sx={{ ...phoneInput, ...input }}
        placeholder="Phone"
      />
      <Input
        disableUnderline
        sx={{ ...problemInput, ...input }}
        placeholder="Describe Your problem"
      />
      <RectangularButton
        title="I am reporting a failure"
        bgColor={theme.palette.secondary.main}
      />
      <Typography
        width="100%"
        fontFamily={"UniteaSans"}
        fontSize={"14px"}
        color={theme.palette.custom.blueLight}
      >
        Submitting the form involves&nbsp;
        <Typography
          fontSize={"13px"}
          component="span"
          fontWeight="bold"
          color={theme.palette.custom.background}
        >
          Acceptance of the Regulations and Privacy Policy
        </Typography>
        &nbsp;.
      </Typography>
    </Box>
  );
};

export default FailureForm;
