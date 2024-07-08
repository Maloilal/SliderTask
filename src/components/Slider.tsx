import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from "swiper/react";
import { SliderNavigation } from "./SliderNavigation";
import { SliderSlide } from "./SliderSlide";
import { EffectFade, FreeMode } from "swiper/modules";
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
  VerticalVector,
  MiddleVector,
  MiddleCircle,
} from "./SliderStyle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Slide, SubSlide } from "../models/Slide";
import styled from "styled-components";

interface SliderProps {
  title: string;
  slides: Slide[];
}

export default function Slider(props: SliderProps) {
  const slideRef = useRef<SwiperRef>(null);
  const [activeSlide, setActiveSlide] = useState<Slide>(props.slides[0]);

  const slideTitle = props.title;

  const slides = props.slides.map((slide) => {
    return (
      <SwiperSlide className="parent-swiper-no-swiping">
        <div style={{ background: "#f4f5f9" }}>
          <SliderSlide slide={slide} />
        </div>
      </SwiperSlide>
    );
  });

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    const newActiveSlide = props.slides[currentIndex];

    setActiveSlide(newActiveSlide);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TitleWrapper>
          <GradientDiv />
          <Title>{slideTitle}</Title>
        </TitleWrapper>
        <SliderDate>
          <StartDate>{activeSlide.startDate.getFullYear()}</StartDate>
          <EndDate>{activeSlide.endDate.getFullYear()}</EndDate>
        </SliderDate>
        <Swiper
          ref={slideRef}
          modules={[EffectFade]}
          effect="fade"
          noSwipingClass="parent-swiper-no-swiping"
          onSlideChange={handleSlideChange}
        >
          <SubSliderDiv>{slides}</SubSliderDiv>
        </Swiper>
        <SliderNavigation swiperRef={slideRef} />
        <VerticalVector />
        <MiddleVector />
        <MiddleCircle />
      </Wrapper>
    </>
  );
}
