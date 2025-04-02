import { Typography } from "@mui/material";
import React from "react";

const SimpleInfo = ({
  cityName,
  address1,
  address2,
}: {
  cityName?: string;
  address1: string;
  address2?: string;
}) => (
  <>
    <h3>Turbohydraulik {cityName}</h3>
    <Typography>
      {address1} {address2}
    </Typography>
  </>
);

export default SimpleInfo;
