interface AreaCalcutable {
  getArea(): number;
}

class Rectangle implements AreaCalcutable {
  constructor(public width?: number, public height?: number) {}

  getArea(): number {
    return this.width! * this.height!;
  }
}

class Square implements AreaCalcutable {
  constructor(public width?: number) {}
  getArea(): number {
    return Math.pow(this.width!, 2);
  }
}

class Geometry {
  static create(unit1: number, unit2: number): AreaCalcutable {
    //karar sonucu:
   if (unit2) {
     return new Rectangle(unit1!, unit2);
   }
   return new Square(unit1!);
  }
}

//Burasını siz yazdınız:
let geo = Geometry.create(5, 10);

console.log(geo.getArea());
