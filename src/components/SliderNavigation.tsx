import React, { useCallback } from "react";
import { SwiperRef } from "swiper/react";
import {
  Button,
  ButtonGroup,
  LeftArrow,
  RightArrow,
  SlideCounter,
} from "./SliderStyle";

interface SliderNavigartionProps {
  swiperRef: React.RefObject<SwiperRef>;
  activeSlide: number;
  totalAmountSlides: number;
}

export const SliderNavigation = (props: SliderNavigartionProps) => {
  const { activeSlide, totalAmountSlides } = props;
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
      <SlideCounter>
        {activeSlide < 10 ? "0" + `${activeSlide + 1}` : activeSlide + 1}/
        {totalAmountSlides < 10 ? "0" + totalAmountSlides : totalAmountSlides}
      </SlideCounter>
      <Button onClick={handlePrev}>
        <LeftArrow />
      </Button>
      <Button onClick={handleNext}>
        <RightArrow />
      </Button>
    </ButtonGroup>
  );
};
