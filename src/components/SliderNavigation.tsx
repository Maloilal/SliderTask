import React, { useCallback } from "react";
import { SwiperRef } from "swiper/react";
import { Button, ButtonGroup } from "./SliderStyle";

interface SliderNavigartionProps {
  swiperRef: React.RefObject<SwiperRef>;
}

export const SliderNavigation = (props: SliderNavigartionProps) => {
  const handlePrev = useCallback(() => {
    if (!props.swiperRef.current) return;
    props.swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!props.swiperRef.current) return;
    props.swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <ButtonGroup>
      <Button onClick={handlePrev}>{"<"}</Button>
      <Button onClick={handleNext}>{">"}</Button>
    </ButtonGroup>
  );
};
