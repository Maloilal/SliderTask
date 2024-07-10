import React, { useState, useRef, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from "swiper/react";
import { SliderNavigation } from "./SliderNavigation";
import { SliderSlide } from "./SliderSlide";
import { EffectFade, FreeMode } from "swiper/modules";
import { AnimatedCounter } from "./AnimatedCounter";
import { SelectWheelItem } from "../models/SelectWheelItem";
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

import { SelectWheel } from "./SelectWheel";

interface SliderProps {
  title: string;
  slides: Slide[];
}

export default function Slider(props: SliderProps) {
  const slideRef = useRef<SwiperRef>(null);
  const [activeSlide, setActiveSlide] = useState<Slide>(props.slides[0]);

  const activeIndexSlide = props.slides.findIndex(
    (slide) => slide.id === activeSlide.id
  );

  const totalAmountSlides = props.slides.length;

  const slideTitle = props.title;

  const slides = props.slides.map((slide, index) => {
    const isCurrentSlideActive = index == props.slides.indexOf(activeSlide);

    return (
      <SwiperSlide className="parent-swiper-no-swiping">
        {isCurrentSlideActive && <SliderSlide slide={slide} />}
      </SwiperSlide>
    );
  });

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    const newActiveSlide = props.slides[currentIndex];

    setActiveSlide(newActiveSlide);
  };

  const handleIndexSelected = (index: number) => {
    slideRef.current?.swiper.slideTo(index);
  };

  const selectWheelItems = props.slides.map(
    (slide) => new SelectWheelItem(slide.title)
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TitleWrapper>
          <GradientDiv />
          <Title>{slideTitle}</Title>
        </TitleWrapper>
        <SliderDate>
          <StartDate>
            <AnimatedCounter
              initialValue={activeSlide.startDate.getFullYear()}
              end={activeSlide.startDate.getFullYear()}
            />
          </StartDate>
          <EndDate>
            <AnimatedCounter
              initialValue={activeSlide.endDate.getFullYear()}
              end={activeSlide.endDate.getFullYear()}
            />
          </EndDate>
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
        <SliderNavigation
          totalAmountSlides={totalAmountSlides}
          activeSlide={activeIndexSlide}
          swiperRef={slideRef}
        />
        <VerticalVector />
        <MiddleVector />
        <MiddleCircle>
          <SelectWheel
            items={selectWheelItems}
            activeIndex={slideRef.current?.swiper.activeIndex || 0}
            onIndexSelected={handleIndexSelected}
          ></SelectWheel>
        </MiddleCircle>
      </Wrapper>
    </>
  );
}
