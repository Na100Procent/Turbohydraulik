import { Box } from "@mui/material";
import React from "react";
import HowToCard from "./HowToCard";
import {
  AppointmentIcon,
  InfosIcon,
  MessageIcon,
} from "@/public/assets/icons/icons";

export const verticalInfoCardsData = [
  {
    icon: <AppointmentIcon />,
    title: "Skontaktuj się",
    subtitle:
      "Contact us by phone or via the form to discuss the details of the service.",
    badgeNumber: 1,
  },
  {
    icon: <InfosIcon />,
    title: "Serwis i naprawa",
    subtitle:
      "We will schedule a convenient appointment time that suits your needs and schedule.",
    badgeNumber: 2,
  },
  {
    icon: <MessageIcon />,
    title: "Instalacje domowe",
    subtitle:
      "Take advantage of our professional service & enjoy the trouble-free operation of your hydraulic installations.",
    badgeNumber: 3,
  },
];

const HowToList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {verticalInfoCardsData.map((card, index) => (
        <HowToCard
          key={index}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
          badgeNumber={card.badgeNumber}
        />
      ))}
    </Box>
  );
};

export default HowToList;
