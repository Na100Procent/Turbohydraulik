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
      "Skontaktuj się z nami telefonicznie lub za pomocą formularza, aby omówić szczegóły usługi.",
    badgeNumber: 1,
  },
  {
    icon: <InfosIcon />,
    title: "Umówienie wizyty",
    subtitle:
      "Umówimy dogodny termin wizyty, który będzie odpowiadał Twoim potrzebom i harmonogramowi.",
    badgeNumber: 2,
  },
  {
    icon: <MessageIcon />,
    title: "Instalacje domowe",
    subtitle:
      "Skorzystaj z naszej profesjonalnej obsługi i ciesz się bezproblemowym działaniem swoich instalacji hydraulicznych.",
    badgeNumber: 3,
  },
];

const HowToList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 10,
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
