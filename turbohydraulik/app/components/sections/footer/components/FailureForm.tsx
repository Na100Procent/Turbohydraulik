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
      <Typography variant="h3" sx={headerSx}>
        ZAMÓW USŁUGĘ HYDRAULICZNĄ
      </Typography>
      <Input
        disableUnderline
        sx={{ ...phoneInput, ...input }}
        placeholder="Twój numer telefonu"
      />
      <Input
        disableUnderline
        sx={{ ...problemInput, ...input }}
        placeholder="Opisz swój problem"
      />
      <RectangularButton
        title="Zamawiam usługę"
        bgColor={theme.palette.secondary.main}
      />
      <Typography
        width="100%"
        fontFamily={"UniteaSans"}
        fontSize={"14px"}
        color={theme.palette.custom.blueLight}
      >
        Przesłanie formularza oznacza&nbsp;
        <Typography
          fontSize={"13px"}
          component="span"
          fontWeight="bold"
          color={theme.palette.custom.background}
        >
          Akceptację Regulaminu i Polityki Prywatności
        </Typography>
        &nbsp;.
      </Typography>
    </Box>
  );
};

export default FailureForm;
