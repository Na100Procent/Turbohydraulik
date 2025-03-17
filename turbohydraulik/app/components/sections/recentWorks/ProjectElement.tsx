import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "@/app/theme/theme";
import MosaicElement from "../../shared/mosaic/MosaicElement";

interface Props {
  bgImage: string;
  title: string;
  description: string;
}

const descriptionSx = {
  fontSize: "15px",
  fontFamily: "UniteaSans",
  fontWeight: "500",
  opacity: 0.8,
};

const contentSx = {
  height: "100%",
  minHeight: "300px",
  display: "flex",
  justifyContent: "end",
  alignItems: "start",
  flexDirection: "column",
  color: "white",
  textAlign: "center",
  padding: "20px",
  gap: "10px",
  position: "relative",
  zIndex: 1,
};

const overlaySx = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to top right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
  zIndex: 0,
};

const ProjectElement = ({ bgImage, title, description }: Props) => {
  return (
    <MosaicElement bgImage={bgImage}>
      <Box sx={overlaySx} />
      <Box sx={contentSx}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "600",
            fontSize: "30px",
            fontFamily: "UniteaSans",
            textAlign: "left",
          }}
        >
          {title}
        </Typography>
        <Typography textAlign="left" sx={descriptionSx}>
          {description}
        </Typography>

        <Box display="flex" mt="5px">
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "12px",
              fontFamily: "UniteaSans",
            }}
          >
            View project
          </Typography>
          <Box mt="-2px">
            <ArrowOutwardIcon
              sx={{
                width: "20px",
                height: "20px",
                color: theme.palette.secondary.main,
              }}
            />
          </Box>
        </Box>
      </Box>
    </MosaicElement>
  );
};

export default ProjectElement;
