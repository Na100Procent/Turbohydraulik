import { defaultPhoneNUmber } from "@/app/constants/appConstants";

export const convertPhoneNum = (phoneNumber?: string) => {
  return `+48 ${phoneNumber ? phoneNumber : defaultPhoneNUmber}`;
};
