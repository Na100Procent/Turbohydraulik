import Image from "next/image";

import Appointment from "./appointmentIcon.svg";
import Infos from "./infosIcon.svg";
import Message from "./messageIcon.svg";
import commas from "./commasIcon.svg";
import YellowL from "./YellowOrnamentL.svg";
import YellowR from "./YellowOrnamentR.svg";

import Logo from "./Logo.svg";

// how to icons
export const AppointmentIcon = () => (
  <Image src={Appointment} alt="Appointment" />
);
export const InfosIcon = () => <Image src={Infos} alt="Infos" />;
export const MessageIcon = () => <Image src={Message} alt="Message" />;

// reviews icon
export const CommasIcon = () => <Image src={commas} alt="commas" />;

// ornaments
export const YellowLeftOrnament = () => <Image src={YellowL} alt="YellowL" />;
export const YellowRightOrnament = () => <Image src={YellowR} alt="YellowR" />;

// logo
export const LogoIcon = () => <Image src={Logo} alt="Logo" />;
