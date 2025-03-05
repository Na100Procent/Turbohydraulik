import React from "react";
import RectangularButton from "@/app/components/shared/RectangularButton";
import theme from "@/app/theme/theme";

const ReadMoreButton = () => {
  return (
    <RectangularButton
      title="Read More About US"
      bgColor={theme.palette.secondary.main}
    />
  );
};

export default ReadMoreButton;
