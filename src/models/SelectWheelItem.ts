export class SelectWheelItem {
    id: number;
    title: string;
  
    constructor(title: string) {
      this.title = title;
      this.id = Math.random();
    }
  }
  
 export class SelectWheelItemWithCoordinates extends SelectWheelItem {
    x: number;
    y: number;
    anglePI: number;
  
    constructor(item: SelectWheelItem, x: number, y: number, anglePI: number) {
      super(item.title);
  
      this.id = item.id;
      this.x = x;
      this.y = y;
      this.anglePI = anglePI;
    }
  }