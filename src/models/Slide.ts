export class Slide {
    id: number;
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
      this.id = Math.random()
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