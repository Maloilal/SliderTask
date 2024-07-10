import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MiddleCircle } from "./SliderStyle";

const SelectWheelCircle = styled.div`
  width: 530px;
  height: 530px;
  border: 1px solid rgba(66, 86, 122, 0.1);
  border-radius: 50%;
  position: relative;
`;

const SelectWheelCenter = styled.div`
  position: absolute;
  left: 265px;
  top: 265px;
  transition-duration: 0.8s;
  transition-property: transform;
`;

const SelectWheelDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #42567a;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(1);
  &:hover {
    transform: scale(3);
    background-color: #f4f5f9;
    border: 1px solid #42567a;
    transition-duration: 0.8s;
    transition-property: transform;
  }
`;

const SelectWheelLabel = styled.div`
  position: absolute;
  width: 100px;
  height: 40px;
  font-family: "PT Sans";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: #42567a;
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
  activeIndex: number;
  onIndexSelected: (index: number) => void;
}

export const SelectWheel = (props: SelectWheelProps) => {
  const { activeIndex, onIndexSelected } = props;
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

  const handleDotClick = (newActiveIndex: number) => {
    onIndexSelected(newActiveIndex);
  };

  useEffect(() => {
    const anglePIDiff = selectedItem.anglePI - singleItemAngle;
    const rotateDeg = (180 * anglePIDiff) / Math.PI;
    setRotateDeg(rotateDeg);
  }, [selectedItem]);

  useEffect(() => {
    setSelectedItem(itemsWithCoordinates[activeIndex]);
  }, [activeIndex]);

  return (
    <SelectWheelCircle>
      <SelectWheelCenter>
        <SelectWheelLabel
          style={{
            top: itemsWithCoordinates[0].y - 40,
            left: itemsWithCoordinates[0].x + 20,
          }}
        >
          {selectedItem.title}
        </SelectWheelLabel>
      </SelectWheelCenter>
      <SelectWheelCenter style={{ transform: `rotate(${rotateDeg}deg)` }}>
        {itemsWithCoordinates.map((item, index) => (
          <SelectWheelDot
            style={{ top: item.y - 5, left: item.x - 5 }}
            onClick={() => handleDotClick(index)}
          ></SelectWheelDot>
        ))}
      </SelectWheelCenter>
    </SelectWheelCircle>
  );
};
