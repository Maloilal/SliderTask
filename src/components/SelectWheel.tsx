import React from "react";
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

  constructor(item: SelectWheelItem, x: number, y: number) {
    super(item.title);

    this.id = item.id;
    this.x = x;
    this.y = y;
  }
}

interface SelectWheelProps {
  items: SelectWheelItem[];
}

export const SelectWheel = (props: SelectWheelProps) => {
  const size = 530;

  const piAngle = (2 * Math.PI) / props.items.length;

  const itemsWithCoordinates = props.items.map((item, index) => {
    const count = index + 1;
    const dotAngle = piAngle * count;

    let xSign = 1;
    let ySign = 1;

    if (piAngle > Math.PI / 2 && piAngle < (3 * Math.PI) / 2) {
      xSign = -1;
    }

    if (piAngle > Math.PI && piAngle < 2 * Math.PI) {
      ySign = -1;
    }

    const x = (size / 2) * Math.cos(dotAngle) * xSign;
    const y = (size / 2) * Math.sin(dotAngle) * ySign;

    return new SelectWheelItemWithCoordinates(item, x, y);
  });

  console.log("itemsWithCoordinates", itemsWithCoordinates);

  return (
    <SelectWheelCircle>
      <SelectWheelCenter>
        {itemsWithCoordinates.map((item) => (
          <SelectWheelDot
            style={{ top: item.y - 5, left: item.x - 5 }}
          ></SelectWheelDot>
        ))}
      </SelectWheelCenter>
    </SelectWheelCircle>
  );
};
