import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";

interface StatItem {
  number: string;
  title: string;
}

const stats: StatItem[] = [
  { number: "10 lat", title: "Doświadczenia" },
  { number: "138+", title: "Zrealizowanych Projektów" },
  { number: "500+", title: "Zadowolonych Klientów" },
];

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  padding: "60px 0",
};

export default function CompanyInNumbers() {
  return (
    <Box sx={container}>
      {stats.map((stat, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center", px: 3 }}>
            <Typography
              sx={{
                fontSize: "65px",
                fontWeight: "900",
                color: theme.palette.secondary.main,
              }}
            >
              {stat.number}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "15px",
                color: theme.palette.primary.main,
              }}
            >
              {stat.title}
            </Typography>
          </Box>
          {index < stats.length - 1 && (
            <Box
              sx={{
                borderLeft: "2px dashed rgba(27, 95, 151, 0.55)",
                height: "100px",
                marginLeft: "50px",
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
