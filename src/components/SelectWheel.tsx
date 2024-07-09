import React, { useState } from "react";
import styled from "styled-components";

const SelectWheelCircle = styled.div`
  width: 530px;
  height: 530px;
  border: 1px solid red;
  border-radius: 50%;
  position: relative;
`;

const SelectWheelCenter = styled.div`
  position: absolute;
  left: 265px;
  top: 265px;
`;

const SelectWheelDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: black;
  border-radius: 50%;
`;

export class SelectWheelItem {
  id: number;
  title: string;

  constructor(title: string) {
    this.title = title;
    this.id = Math.random();
  }
}

class SelectWheelItemWithCoordinates extends SelectWheelItem {
  x: number;
  y: number;
  anglePI: number;

  constructor(item: SelectWheelItem, x: number, y: number, anglePI: number) {
    super(item.title);

    this.id = item.id;
    this.x = x;
    this.y = y;
    this.anglePI = anglePI;
  }
}

interface SelectWheelProps {
  items: SelectWheelItem[];
}

export const SelectWheel = (props: SelectWheelProps) => {
  const size = 530;
  const [rotateDeg, setRotateDeg] = useState(0);

  const singleItemAngle = (2 * Math.PI) / props.items.length;

  const itemsWithCoordinates = props.items.map((item, index) => {
    const count = index + 1;
    const dotAngle = singleItemAngle * count;

    let xSign = -1;
    let ySign = 1;

    if (dotAngle > Math.PI / 2 || dotAngle <= (3 * Math.PI) / 2) {
      xSign = 1;
    }

    if (dotAngle > Math.PI || dotAngle <= 2 * Math.PI) {
      ySign = -1;
    }

    const x = (size / 2) * Math.cos(dotAngle) * xSign;
    const y = (size / 2) * Math.sin(dotAngle) * ySign;

    return new SelectWheelItemWithCoordinates(item, x, y, dotAngle);
  });

  const [selectedItem, setSelectedItem] =
    useState<SelectWheelItemWithCoordinates>(itemsWithCoordinates[0]);

  const handleDotClick = (item: SelectWheelItemWithCoordinates) => {
    const anglePIDiff = item.anglePI - singleItemAngle;
    const rotateDeg = (180 * anglePIDiff) / Math.PI;
    setRotateDeg(rotateDeg);
    setSelectedItem(item);
  };

  return (
    <SelectWheelCircle>
      <SelectWheelCenter style={{ transform: `rotate(${rotateDeg}deg)` }}>
        {itemsWithCoordinates.map((item) => (
          <SelectWheelDot
            style={{ top: item.y - 5, left: item.x - 5 }}
            onClick={() => handleDotClick(item)}
          >
            {item.title} {item.anglePI}
          </SelectWheelDot>
        ))}
      </SelectWheelCenter>
    </SelectWheelCircle>
  );
};
