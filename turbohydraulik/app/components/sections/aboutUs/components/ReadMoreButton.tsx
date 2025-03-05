import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import RectangularButton from "@/app/components/shared/RectangularButton";
import theme from "@/app/theme/theme";

const ReadMoreButton = () => {
  return (
    <RectangularButton
      title="Read More About US"
      bgColor={theme.palette.secondary.main}
      icon={
        <ArrowOutwardIcon
          sx={{
            width: "20px",
            height: "20px",
            color: theme.palette.primary.main,
          }}
        />
      }
    />
  );
};

export default ReadMoreButton;
