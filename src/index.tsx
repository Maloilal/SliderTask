import React from "react";
import ReactDOM from "react-dom/client";
import Slider, { Slide, SubSlide } from "./components/slider";
import "../src/css_reset.css";

const App: React.FC = () => {
  const slides: Slide[] = [
    new Slide("title", new Date("2015-01-16"), new Date("2022-01-16"), [
      new SubSlide(
        new Date("2015-01-01"),
        "13 сентября - частное солнечное затмение, видимое в южной африке и части антарктиды"
      ),
      new SubSlide(
        new Date("2016-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
      new SubSlide(
        new Date("2017-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
      new SubSlide(
        new Date("2018-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
    ]),
    new Slide("title1", new Date("2017-01-16"), new Date("2021-01-16"), [
      new SubSlide(new Date("2015-01-01"), "ssssssssssssss"),
      new SubSlide(
        new Date("2016-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
      new SubSlide(
        new Date("2017-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
      new SubSlide(
        new Date("2018-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
    ]),
    new Slide("title2", new Date(), new Date(), [
      new SubSlide(new Date("2015-01-01"), "pppppppppppppppppppppppppppp"),
      new SubSlide(
        new Date("2019-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
      new SubSlide(
        new Date("2020-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
      new SubSlide(
        new Date("2021-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
    ]),
    new Slide("title3", new Date(), new Date(), [
      new SubSlide(
        new Date("2015-01-01"),
        "dddddddddddddddddddddddddddddddddddddddddddddddd"
      ),
      new SubSlide(
        new Date("2016-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
      new SubSlide(
        new Date("2017-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
      new SubSlide(
        new Date("2018-01-01"),
        "Телескоп 'Хаббл' обнаружи самую удаленную из всех обнаруженных галактик, получившую обзначение ГН-з11"
      ),
    ]),
  ];
  return <Slider title="Исторические даты" slides={slides} />;
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);
