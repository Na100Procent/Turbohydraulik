import React from "react";
import MosaicGrid from "../../shared/mosaic/MosaicGrid";
import MosaicElement from "../../shared/mosaic/MosaicElement";

const images = [
  "https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11",
  "https://github.com/user-attachments/assets/3d7c0dba-1f19-4d53-b7c2-15743f2b7408",
  "https://github.com/user-attachments/assets/9a949cec-703c-4c7e-85af-f96cbcd1963d",
  "https://github.com/user-attachments/assets/ca378ab7-a9b2-4736-ac5f-fe20ad776b11",
];

const MosaicWorkGrid = () => {
  const elements = [
    <MosaicElement key={1} bgImage={images[2]} />,
    <MosaicElement key={2} bgImage={images[3]} />,
    <MosaicElement key={3} bgImage={images[0]} />,
    <MosaicElement key={4} bgImage={images[1]} />,
  ];
  return <MosaicGrid elements={elements} />;
};

export default MosaicWorkGrid;
