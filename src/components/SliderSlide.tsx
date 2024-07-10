import { Slide } from "../models/Slide";
import React, { useRef, useCallback } from "react";
import { SwiperRef, Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import {
  SubButton,
  SubSliderDate,
  SubSliderDiv,
  SliderText,
  SwiperWrapper,
  LeftArrow,
  RightArrow,
} from "./SliderStyle";

interface SliderSlideProps {
  slide: Slide;
}

export function SliderSlide(props: SliderSlideProps) {
  const { slide } = props;
  const refSubSlide = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!refSubSlide.current) return;
    refSubSlide.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!refSubSlide.current) return;
    refSubSlide.current.swiper.slideNext();
  }, []);

  const subSlides = slide.subSlides.map((subSlide) => {
    return (
      <SwiperSlide>
        <SubSliderDiv>
          <SubSliderDate>{subSlide.date.getFullYear()}</SubSliderDate>
          <SliderText>{subSlide.info}</SliderText>
        </SubSliderDiv>
      </SwiperSlide>
    );
  });

  return (
    <>
      <SwiperWrapper>
        {refSubSlide.current?.swiper.activeIndex !== 0 && (
          <SubButton onClick={handlePrev}>
            <LeftArrow />
            {refSubSlide.current?.swiper.activeIndex}
          </SubButton>
        )}
        <Swiper
          ref={refSubSlide}
          freeMode={true}
          slidesPerView={3}
          modules={[FreeMode]}
        >
          {subSlides}
        </Swiper>
        <SubButton onClick={handleNext}>
          <RightArrow />
        </SubButton>
      </SwiperWrapper>
    </>
  );
}
