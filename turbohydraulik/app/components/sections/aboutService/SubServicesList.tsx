import { SubService } from "@/app/data/types/dataTypes";
import React from "react";
import TitledVerticalList, {
  LinkElement,
} from "../../shared/TitledVerticalList";
import theme from "@/app/theme/theme";

interface Props {
  subServices: SubService[];
}
const SubServicesList = ({ subServices }: Props) => {
  console.log(subServices);
  const subServicesList: LinkElement[] = subServices.map((subService) => {
    return {
      title: subService.name,
      url: "",
    };
  });
  return (
    <TitledVerticalList
      title={"USŁUGI POWIĄZANE"}
      list={subServicesList}
      addSx={{ color: theme.palette.primary.main }}
    />
  );
};

export default SubServicesList;
