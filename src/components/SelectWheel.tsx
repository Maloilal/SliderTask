import React, { useState, useEffect } from "react";
import {
  SelectWheelCenter,
  SelectWheelCircle,
  SelectWheelDot,
  SelectWheelLabel,
} from "./SliderStyle";
import {
  SelectWheelItem,
  SelectWheelItemWithCoordinates,
} from "../models/SelectWheelItem";

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
