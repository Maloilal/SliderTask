import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f5f9;
  }`;

interface SliderProps {
  title: string;
  slides: Slide[];
}

export class Slide {
  title: string;
  startDate: Date;
  endDate: Date;
  subSlides: SubSlide[];

  constructor(
    title: string,
    startDate: Date,
    endDate: Date,
    subSlides: SubSlide[]
  ) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.subSlides = subSlides;
  }
}
export class SubSlide {
  date: Date;
  info: string;

  constructor(date: Date, info: string) {
    this.date = date;
    this.info = info;
  }
}

interface SliderSlideProps {
  slide: Slide;
}

const Wrapper = styled.section`
  width: 1440px;
  border: 1px solid rgba(66, 86, 122, 0.1);
  margin: auto;
  border-top: 0;
  border-bottom: 0;
`;

const SliderDate = styled.div`
  display: flex;
  margin: auto;
  padding-top: 85px;
  gap: 80px;
  width: 970px;
`;
const StartDate = styled.div`
  font-family: "PT Sans";
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  text-align: center;
  color: #6383f7;
`;
const EndDate = styled.div`
  font-family: "PT Sans";
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  text-align: center;
  color: #f582e9;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 70px;
  padding-top: 160px;
`;

const Title = styled.div`
  font-family: "PT Sans";
  font-size: 56px;
  font-weight: bold;
  color: #42567a;
  width: 355px;
`;
const GradientDiv = styled.div`
  height: 140px;
  background: linear-gradient(180deg, #3877ee -5%, #ef5da8 85%);
  width: 5px;
`;
const ButtonGroup = styled.div`
  display: flex;
  padding-top: 185px;
  gap: 10px;
  margin-left: 70px;
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid;
  margin-left: 10px;
`;
const SubSliderDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  gap: 20px;
  opacity: 0px;
`;
const SliderText = styled.div`
  width: 320px;
  gap: 0px;
  opacity: 0px;
  font-family: "PT Sans";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;

  color: #42567a;
`;
const SubSliderDate = styled.div`
  font-family: Bebas Neue;
  font-size: 25px;
  font-weight: bold;
  line-height: 30px;
  text-align: left;

  color: #3877ee;
`;

export function SliderSlide(props: SliderSlideProps) {
  const { slide } = props;

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
    <Swiper
      freeMode={true}
      slidesPerView={3}
      navigation={true}
      modules={[FreeMode, Navigation]}
    >
      {subSlides}
    </Swiper>
  );
}

export default function Slider(props: SliderProps) {
  const slideRef = useRef<SwiperRef>(null);

  const slideTitle = props.title;
  const date = new Date(2002, 11, 11);

  const slides = props.slides.map((slide) => {
    return (
      <SwiperSlide>
        <SliderDate>
          <StartDate>{slide.startDate.getFullYear()}</StartDate>
          <EndDate>{slide.endDate.getFullYear()}</EndDate>
        </SliderDate>
        <SliderSlide slide={slide} />
        <SliderText> {slide.title}</SliderText>
      </SwiperSlide>
    );
  });

  const topLevelNavigation = () => {
    const handlePrev = useCallback(() => {
      if (!slideRef.current) return;
      slideRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
      if (!slideRef.current) return;
      slideRef.current.swiper.slideNext();
    }, []);

    return (
      <>
        <Button onClick={handlePrev}>{"<"}</Button>
        <Button onClick={handleNext}>{">"}</Button>
      </>
    );
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TitleWrapper>
          <GradientDiv />
          <Title>{slideTitle}</Title>
        </TitleWrapper>
        <ButtonGroup>{topLevelNavigation()}</ButtonGroup>{" "}
        <Swiper ref={slideRef}>
          <SubSliderDiv>{slides}</SubSliderDiv>
        </Swiper>
      </Wrapper>
    </>
  );
}
