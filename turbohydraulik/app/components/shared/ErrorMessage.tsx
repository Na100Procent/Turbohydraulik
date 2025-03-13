import { Typography } from "@mui/material";
import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Typography
      variant="h6"
      style={{
        color: "red",
        width: "100%",
        textAlign: "center",
        marginTop: "150px",
        fontFamily: "UniteaSans",
        fontSize: "20px",
        fontWeight: "600",
      }}
    >
      {message}
    </Typography>
  );
};

export default ErrorMessage;
