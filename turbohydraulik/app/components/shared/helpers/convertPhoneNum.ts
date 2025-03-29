import { defaultPhoneNUmber } from "@/app/constants/appConstants";

export const convertPhoneNum = (phoneNumber?: string, forCall?: boolean) => {
  const sanitizedNumber = (phoneNumber || defaultPhoneNUmber).replace(
    /\s+/g,
    ""
  );

  if (forCall) {
    return `+48${sanitizedNumber}`;
  }

  if (/^\d{9}$/.test(sanitizedNumber)) {
    return `+48 ${sanitizedNumber.replace(
      /(\d{3})(\d{3})(\d{3})/,
      "$1 $2 $3"
    )}`;
  }

  return `+48 ${sanitizedNumber}`;
};
