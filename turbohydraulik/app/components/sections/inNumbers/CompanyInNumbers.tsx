import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";

interface StatItem {
  number: string;
  title: string;
}

const stats: StatItem[] = [
  { number: "10 lat", title: "Doświadczenia" },
  { number: "138+", title: "Zrealizowanych Projektów w ostatnich 30 dniach" },
  { number: "500+", title: "Zadowolonych Klientów w ostatnich 30 dniach" },
];

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  padding: "60px 0",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
};

const separatorSx = {
  borderLeft: "2px dashed rgba(27, 95, 151, 0.55)",
  height: "100px",
  marginLeft: "50px",
  display: {
    xl: "block",
    lg: "block",
    md: "block",
    sm: "none",
    xs: "none",
    xxs: "none",
  },
};

const numbersSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const numberSx = {
  fontSize: {
    xl: "75px",
    lg: "75px",
    md: "60px",
    sm: "50px",
    xs: "40px",
    xxs: "40px",
  },
  fontWeight: "800",
  fontFamily: "UniteaSans",
  color: theme.palette.secondary.main,
  minWidth: "140px",
};

const titleSx = {
  fontWeight: "600",
  maxWidth: "200px",
  fontSize: "14px",
  color: theme.palette.primary.main,
};

export default function CompanyInNumbers() {
  return (
    <Box sx={container}>
      {stats.map((stat, index) => (
        <Box key={index} sx={numbersSx}>
          <Box sx={{ textAlign: "center", px: 2 }}>
            <Typography sx={numberSx}>{stat.number}</Typography>
            <Typography sx={titleSx}>{stat.title}</Typography>
          </Box>
          {index < stats.length - 1 && <Box sx={separatorSx} />}
        </Box>
      ))}
    </Box>
  );
}
