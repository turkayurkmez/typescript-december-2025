class Rectangle {
  constructor(public width?: number, public height?:number ) {}

  getArea():number{
    return this.width! * this.height!;
  }
}

class Square extends Rectangle{
   
    constructor(public width?: number){
        super(width,width);

    }

} 

class Geometry{
    static create(unit1: number, unit2:number):Rectangle{
        //karar sonucu:
        return new Square(unit1);
    }
}

//Burasını siz yazdınız:
let geo  = Geometry.create(5,10);

console.log(geo.getArea());


