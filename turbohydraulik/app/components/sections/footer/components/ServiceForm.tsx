"use client";
import RectangularButton from "@/app/components/shared/RectangularButton";
import theme from "@/app/theme/theme";
import { Box, Input, Typography } from "@mui/material";
import useFormMessage from "../hooks/useFormMessageHook";

interface Props {
  actionButtonTitle?: string;
  customTitle?: string;
  includeBg?: boolean;
}
const themeCustom = theme.palette.custom;
const headerSx = {
  fontWeight: "600",
  fontSize: "17px",
  color: themeCustom.background,
  mb: "10px",
};

const inputSx = {
  background: themeCustom.background,
  color: themeCustom.darkBlue,
  borderRadius: "5px",
  fontSize: "14px",
  padding: "10px 20px",
  border: "none",
  "&:focus": {
    boxShadow: "none",
    borderColor: "transparent",
  },
};

const problemInputSx = {
  minHeight: "100px",
  display: "flex",
  alignItems: "flex-start",
};

const ServiceForm = ({ actionButtonTitle, customTitle, includeBg }: Props) => {
  const {
    phone,
    setPhone,
    problem,
    setProblem,
    loading,
    error,
    success,
    handleSubmit,
  } = useFormMessage();

  const container = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "400px",
    padding: includeBg ? "30px 20px" : 0,
    borderRadius: "10px",
    background: includeBg ? theme.palette.primary.main : "transparent",
  };

  const buttonDisabled = loading || !phone || !problem;
  return (
    <Box sx={container}>
      <Typography variant="h3" sx={headerSx}>
        {customTitle ? customTitle : "ZAMÓW USŁUGĘ HYDRAULICZNĄ"}
      </Typography>
      <Input
        disableUnderline
        sx={inputSx}
        placeholder="Twój numer telefonu"
        value={phone}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "").slice(0, 9);

          setPhone(value);
        }}
      />
      <Input
        disableUnderline
        sx={{ ...inputSx, ...problemInputSx }}
        placeholder="Opisz swój problem"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        multiline
      />
      <RectangularButton
        title={
          loading
            ? "Wysyłanie..."
            : actionButtonTitle
            ? actionButtonTitle
            : "Zamawiam usługę"
        }
        bgColor={
          buttonDisabled ? themeCustom.lightGray : theme.palette.secondary.main
        }
        onClick={handleSubmit}
        disabled={buttonDisabled}
      />
      {error && (
        <Typography color="error" fontSize="14px">
          {error}
        </Typography>
      )}
      {success && (
        <Typography
          color={themeCustom.positiveGreen}
          fontSize="16px"
          fontWeight="bold"
          textAlign="center"
        >
          Wiadomość została wysłana!
        </Typography>
      )}
      <Typography width="100%" fontSize={"14px"} color={themeCustom.blueLight}>
        Przesłanie formularza oznacza&nbsp;
        <Typography
          fontSize={"13px"}
          component="span"
          fontWeight="bold"
          color={themeCustom.background}
        >
          Akceptację Regulaminu i Polityki Prywatności
        </Typography>
        &nbsp;.
      </Typography>
    </Box>
  );
};

export default ServiceForm;
