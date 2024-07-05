import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { SliderNavigation } from "./SliderNavigation";
import { SliderSlide } from "./SliderSlide";
import {
  GlobalStyle,
  SliderDate,
  StartDate,
  EndDate,
  Wrapper,
  Title,
  TitleWrapper,
  GradientDiv,
  SubSliderDiv,
} from "./SliderStyle";
import "swiper/css";
import "swiper/css/navigation";
import { Slide, SubSlide } from "../models/Slide";

interface SliderProps {
  title: string;
  slides: Slide[];
}

export default function Slider(props: SliderProps) {
  const slideRef = useRef<SwiperRef>(null);

  const slideTitle = props.title;

  const slides = props.slides.map((slide) => {
    return (
      <SwiperSlide>
        <SliderDate>
          <StartDate>{slide.startDate.getFullYear()}</StartDate>
          <EndDate>{slide.endDate.getFullYear()}</EndDate>
        </SliderDate>
        <SliderSlide slide={slide} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TitleWrapper>
          <GradientDiv />
          <Title>{slideTitle}</Title>
        </TitleWrapper>
        <Swiper ref={slideRef}>
          <SubSliderDiv>{slides}</SubSliderDiv>
        </Swiper>
        <SliderNavigation swiperRef={slideRef} />
      </Wrapper>
    </>
  );
}
