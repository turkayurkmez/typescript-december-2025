let id: number | string;
id = 101;
id = "300A";
//id = false;

type ApiResponse =
  | { success: true; data: string }
  | { success: false; error: string };

function handleResponse(response: ApiResponse): void {
  if (response.success) {
    console.log("veri geldi", response.data);
  } else {
    console.log("hata oluştu", response.error);
  }
}

handleResponse({ success: true, data: "item1, item2" });
handleResponse({ success: false, error: "Bir hata oluştu" });

function formatValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    return `${value ? "Doğru" : "Yanlış"}`;
  }
}

console.log(formatValue("test"));

console.log(formatValue(1.678));
console.log(formatValue(false));

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
  const roll = (Math.floor(Math.random() * 6) + 1) as DiceRoll;
  console.log(roll);
  return roll;
}

for (let index = 0; index < 5; index++) {
  rollDice();
}

//discriminated union pattern

type Shape = {kind:'circle', radius:number} |
             {kind:'rectangle',width:number, height: number} |
             {kind:'square',sideLength:number}

function area(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "rectangle":
            return shape.width * shape.height
        case "square":
            return Math.pow(shape.sideLength,2);  
    
        default:
            const check: never = shape;
            return check;
          
    }
}            

console.log('daire:', area({kind:'circle', radius:3}));
console.log('dörtgen:', area({kind:'rectangle', width:7, height:3}));
console.log('kare:', area({kind:'square',sideLength:5}));


type Employee = {
  employeeId: number,
  department: string
};

type Person = {
  name:string,
  age:number
}

type WorkingPerson = Person & Employee;

const worker: WorkingPerson={
  employeeId:1,
  age:38,
  department:"test",
  name: "Bilgehan"

};


console.log(worker);

/* Intersection Mixin Patterns */

type HasTimeStamps= {
    createdAt: Date;
    updatetAt: Date
};

type HasId = {
  id:string
};

type User = {
  username: string,
  email:string

}

type UserEntity = User & HasId & HasTimeStamps;
const user2: UserEntity = {
  id:"user-1023",
  username:"info",
  email:"abc@example.com",
  createdAt: new Date(),
  updatetAt:new Date()

};