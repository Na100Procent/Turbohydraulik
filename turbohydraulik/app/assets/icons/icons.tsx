import Appointment from "./appointmentIcon.svg";
import Infos from "./infosIcon.svg";
import Message from "./messageIcon.svg";
import Image from "next/image";

export const AppointmentIcon = () => (
  <Image src={Appointment} alt="Appointment" />
);
export const InfosIcon = () => <Image src={Infos} alt="Infos" />;
export const MessageIcon = () => <Image src={Message} alt="Message" />;
