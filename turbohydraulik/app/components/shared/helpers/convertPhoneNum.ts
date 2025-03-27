import { defaultPhoneNUmber } from "@/app/constants/appConstants";

export const convertPhoneNum = (isMobile: boolean, phoneNumber?: string) => {
  if (!phoneNumber) return defaultPhoneNUmber;
  let convertedPhone = phoneNumber;
  if (isMobile) convertedPhone = `+48${phoneNumber}`;
  else if (phoneNumber) {
    convertedPhone = phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
  }

  return convertedPhone;
};
