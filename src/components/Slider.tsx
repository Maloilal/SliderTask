import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

export function SliderSlide(props: SliderSlideProps) {
  const { slide } = props;

  const subSlides = slide.subSlides.map((subSlide) => {
    return <SwiperSlide>{subSlide.info}</SwiperSlide>;
  });

  return (
    <div>
      <div>{slide.title}</div>
      <Swiper
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
      >
        {subSlides}
      </Swiper>
    </div>
  );
}

export default function Slider(props: SliderProps) {
  const slideRef = useRef<SwiperRef>(null);

  const slides = props.slides.map((slide) => {
    return (
      <SwiperSlide>
        <SliderSlide slide={slide} />
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
        <div onClick={handlePrev}>prev</div>
        <div onClick={handleNext}>next</div>
      </>
    );
  };

  return (
    <div style={{ background: "#f2f2f2", height: "100vh", width: "100%" }}>
      <Swiper ref={slideRef}>
        {topLevelNavigation()}
        {slides}

        {/* <div
          style={{
            position: "relative",
            border: "1px solid #ebebed",
            width: "1440px",
            margin: "auto",
            height: "100%",
          }}
        >
          <div style={{ borderLeft: "3px solid black" }}>
            <h1>{props.title}</h1>
          </div>
          <div
            style={{
              zIndex: "1",
              margin: "auto",
              width: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "1250%", marginRight: "50px" }}>
              <p>2017</p>
            </div>
            <div style={{ fontSize: "1250%", marginLeft: "50px" }}>
              <p>2019</p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "320px",
            }}
          >
            <button style={{ borderRadius: "50%" }}>left</button>
            <button style={{ borderRadius: "50%" }}>right</button>
          </div>
          <Swiper
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              height: "320px",
              background: "red",
            }}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation]}
          >
            {slides}
          </Swiper> */}
        {/* </div> */}
      </Swiper>
    </div>
  );
}
