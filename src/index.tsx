import React from "react";
import ReactDOM from "react-dom/client";
import Slider, { Slide, SubSlide } from "./components/slider";

const App: React.FC = () => {
  const slides: Slide[] = [
    new Slide("title", new Date(), new Date(), [
      new SubSlide(new Date(), "dddddddddddddddddd"),
      new SubSlide(new Date(), "dddddddddddddddddd"),
      new SubSlide(new Date(), "dddddddddddddddddd"),
      new SubSlide(new Date(), "dddddddddddddddddd"),
    ]),
    new Slide("title1", new Date(), new Date(), [
      new SubSlide(new Date(), "ssssssssssssss"),
      new SubSlide(new Date(), "sssssssssssssss"),
      new SubSlide(new Date(), "ddssssssssssssssddd"),
      new SubSlide(new Date(), "ddddsdddsssssssssssssssssdddsdd"),
    ]),
    new Slide("title2", new Date(), new Date(), []),
    new Slide("title3", new Date(), new Date(), []),
  ];
  return <Slider title="slider" slides={slides} />;
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);
