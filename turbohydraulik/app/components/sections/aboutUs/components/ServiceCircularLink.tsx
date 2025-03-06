import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "@/app/theme/theme";

export default function ServiceCircularLink() {
  return (
    <Box sx={{ position: "relative", width: "120px", height: "120px" }}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <path
            id="circlePath"
            d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          />
        </defs>
        <text fontSize="12px" letterSpacing="0.8px">
          <textPath
            href="#circlePath"
            startOffset="0%"
            style={{
              fontFamily: "UniteaSans",
              fontWeight: 600,
              fill: theme.palette.primary.main,
            }}
          >
            VIEW SERVICE • VIEW SERVICE • VIEW SERVICE •
          </textPath>
        </text>
      </svg>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70px",
          height: "70px",
          backgroundColor: "#FED33B",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowOutwardIcon
          sx={{
            width: "20px",
            height: "20px",
            color: theme.palette.primary.main,
          }}
        />
      </Box>
    </Box>
  );
}
