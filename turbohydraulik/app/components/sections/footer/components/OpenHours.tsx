import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  cityName?: string;
}

const contentSx = {
  width: "100%",
  my: 2,
  color: theme.palette.custom.background,
};

const OpenHours = ({ cityName }: Props) => {
  const openHoursPerDays = [
    { day: "Poniedziałek", hour: "8:00 - 20:00" },
    { day: "Wtorek", hour: "8:00 - 20:00" },
    { day: "Środa", hour: "8:00 - 20:00" },
    { day: "Czwartek", hour: "8:00 - 20:00" },
    { day: "Piątek", hour: "8:00 - 20:00" },
    { day: "Sobota", hour: "8:00 - 20:00" },
    { day: "Niedziela", hour: "8:00 - 20:00" },
  ];

  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight="600"
        mb="30px"
        fontSize="20px"
        color={theme.palette.custom.background}
        sx={{}}
      >
        Godziny otwarcia Turbo Hydraulik {cityName}
      </Typography>
      <Box sx={contentSx}>
        {openHoursPerDays.map(({ day, hour }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              my: 1,
            }}
          >
            <Typography
              sx={{
                whiteSpace: "nowrap",
                minWidth: "150px",
                fontSize: "18px",
              }}
            >
              {day}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                textAlign: "center",
                color: "#fff",
                fontSize: "18px",
                letterSpacing: "2px",
                mx: 2,
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            ></Box>
            <Typography sx={{ fontWeight: "bold", minWidth: "100px" }}>
              {hour}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OpenHours;
