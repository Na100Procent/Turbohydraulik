import { defaultPhoneNUmber } from "@/app/constants/appConstants";

export const convertPhoneNum = (phoneNumber?: string) => {
  const sanitizedNumber = (phoneNumber || defaultPhoneNUmber).replace(
    /\s+/g,
    ""
  );
  const formattedNumber = sanitizedNumber.replace(
    /(\d{3})(\d{3})(\d{3})/,
    "$1 $2 $3"
  );
  return `+48 ${formattedNumber}`;
};
