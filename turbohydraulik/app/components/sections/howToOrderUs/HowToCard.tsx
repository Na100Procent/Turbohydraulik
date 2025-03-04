import React from "react";
import { Box, Typography } from "@mui/material";
import CircularNumber from "./CircularNumber";
import theme from "@/app/theme/theme";

interface HowToCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  badgeNumber: number | string;
}

const HowToCard: React.FC<HowToCardProps> = ({
  icon,
  title,
  subtitle,
  badgeNumber,
}) => {
  const bgColorOpacity = badgeNumber === 2 ? 1 : 0.15;

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "280px",
        minHeight: "300px",
        borderRadius: 2,
        backgroundColor: `rgba(254, 211, 59, ${bgColorOpacity})`,
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: "20px",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box sx={{ mt: 2 }}>{icon}</Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: "10px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: "300px" }}>
          {subtitle}
        </Typography>
      </Box>
      <CircularNumber number={badgeNumber as number} />
    </Box>
  );
};

export default HowToCard;
