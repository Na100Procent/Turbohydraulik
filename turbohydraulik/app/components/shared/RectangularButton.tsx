import theme from "@/app/theme/theme";
import { Box, Button, Typography } from "@mui/material";
import React, { JSX } from "react";

interface Props {
  title: string;
  onClick?: () => void;
  icon?: JSX.Element;
}

const buttonSx = {
  background: theme.palette.secondary.main,
  textTransform: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 20px",
  gap: "10px",
};

const titleSx = {
  color: theme.palette.primary.main,
  fontWeight: "600",
};
const RectangularButton = ({ title, onClick, icon }: Props) => {
  return (
    <Button onClick={onClick} sx={buttonSx}>
      <Typography sx={titleSx}>{title}</Typography>
      <Box mt="5px">{icon}</Box>
    </Button>
  );
};

export default RectangularButton;
