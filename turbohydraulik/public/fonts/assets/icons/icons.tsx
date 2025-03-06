import Image from "next/image";

import Appointment from "./appointmentIcon.svg";
import Infos from "./infosIcon.svg";
import Message from "./messageIcon.svg";
import Commas from "./commasIcon.svg";
import YellowL from "./YellowOrnamentL.svg";
import YellowR from "./YellowOrnamentR.svg";
import TopMenuOrn from "./TopMenuOrnament.svg";
import TMLogo from "./TopMenuLogo.svg";
import Logo from "./Logo.svg";

// how to icons
export const AppointmentIcon = () => (
  <Image src={Appointment} alt="Appointment" />
);
export const InfosIcon = () => <Image src={Infos} alt="Infos" />;
export const MessageIcon = () => <Image src={Message} alt="Message" />;

// reviews icon
export const CommasIcon = () => <Image src={Commas} alt="Commas" />;

// ornaments
export const YellowLeftOrnament = () => <Image src={YellowL} alt="YellowL" />;
export const YellowRightOrnament = () => <Image src={YellowR} alt="YellowR" />;
export const TopMenuOrnament = () => (
  <Image src={TopMenuOrn} alt="TopMenuOrn" />
);

// logo
export const LogoIcon = () => <Image src={Logo} alt="Logo" />;
export const TopMenuLogo = () => <Image src={TMLogo} alt="TMLogo" />;
