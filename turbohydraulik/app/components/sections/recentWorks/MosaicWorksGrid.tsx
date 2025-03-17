import React from "react";
import MosaicGrid from "../../shared/mosaic/MosaicGrid";
import ProjectElement from "./ProjectElement";

const images = [
  "https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11",
  "https://github.com/user-attachments/assets/3d7c0dba-1f19-4d53-b7c2-15743f2b7408",
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d",
  "https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11",
];

const projectContent = [
  {
    title: "Renowacja Systemu Hydraulicznego",
    description:
      "Kompleksowa renowacja systemu hydraulicznego w budynku mieszkalnym.",
  },
  {
    title: "Instalacja  Urządzeń ",
    description:
      "Montaż nowoczesnych urządzeń hydraulicznych w nowo wybudowanym biurowcu.",
  },
  {
    title: "Naprawa Przecieków ",
    description:
      "Szybka i skuteczna naprawa przecieków w instalacji hydraulicznej.",
  },
  {
    title: "Modernizacja Sieci Hydraulicznej",
    description:
      "Modernizacja i optymalizacja sieci hydraulicznej w zakładzie przemysłowym.",
  },
];

const MosaicWorkGrid = () => {
  const elements = [
    <ProjectElement
      key={1}
      bgImage={images[0]}
      title={projectContent[0].title}
      description={projectContent[0].description}
    />,
    <ProjectElement
      key={2}
      bgImage={images[1]}
      title={projectContent[1].title}
      description={projectContent[1].description}
    />,
    <ProjectElement
      key={3}
      bgImage={images[2]}
      title={projectContent[2].title}
      description={projectContent[2].description}
    />,
    <ProjectElement
      key={4}
      bgImage={images[3]}
      title={projectContent[3].title}
      description={projectContent[3].description}
    />,
  ];
  return <MosaicGrid elements={elements} />;
};

export default MosaicWorkGrid;
