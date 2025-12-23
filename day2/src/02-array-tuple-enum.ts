let numbers: number[] = [10, 20, 30, 40, 50];
let names: string[] = ["Sema", "Betül", "Ali", "Veli"];

let scores: Array<number> = [90, 80, 70];

let filteredNumbers = numbers.filter((x) => x < 30);
console.log(filteredNumbers);
console.log(Array.isArray(filteredNumbers));

let mapped = names.map((n) => n.toUpperCase());
console.log(mapped);

let personTuple: [string, number, boolean] = ["Türkay", 45, true];
console.log(personTuple);
let nameInfo = personTuple[0];
let ageInfo = personTuple[1];
let stateInfo = personTuple[2];

console.log(nameInfo, ageInfo, stateInfo);
// personTuple: [...personTuple];
//destructured:
let [username, age, state] = personTuple;
console.log(username, age, state);

type coordinates = [number, number];
let istanbulCoordinate: coordinates = [41, 28];
console.log(istanbulCoordinate);

//istanbulCoordinate.push(20);
//kaçınılması gerekir (tuple, js tarafında array olarak algılanacak)

console.log(istanbulCoordinate);

//Enum tanımı:

enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Canceled,
}

let currentStatus: OrderStatus = OrderStatus.Delivered;
console.log(currentStatus);

enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  NotFound = 404,
  Unauthorized = 401,
  Forbidden = 403,
  InternalServerError = 500,
}

function handleResponse(status: HttpStatus): void {
  switch (status) {
    case HttpStatus.OK:
      console.log("her şey yolunda!");

      break;
    case HttpStatus.NotFound:
      console.log("kaynak bulunamadı");
      break;
    case HttpStatus.BadRequest:
      4;
      break;
    case HttpStatus.Forbidden:
      break;
    case HttpStatus.InternalServerError:
      break;
    case HttpStatus.Unauthorized:
      break;
    default:
      break;
  }
}

handleResponse(HttpStatus.NotFound);

type Color = "Red" | "Green" | "Blue";

function setColor(color: Color) {
  console.log("renk atandı:", color);
}

enum ColorEnum {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function setEnumColor(color: ColorEnum): void {
  console.log("renk atandı:", color);
}
setColor("Blue");
setEnumColor(ColorEnum.Green);
/*
   enum'lar run-time'da var olur. union  tipler olmaz.
   enum: daha az hata yapma ihtimali
   okunabilirlik.... 
*/

enum userRole{
    Admin ="ADMIN",
    Editor ="EDITOR",
    Viewer = "VIEWER"
}

type UserData = [id:string, name:string, role:userRole, isActive:boolean];

let users: UserData[]=[
    ["1","user1",userRole.Admin,true],
    ["2","user2",userRole.Editor,false],
    ["3","user3",userRole.Viewer,true],
    ["4","user4",userRole.Admin,true],
    ["5","user5",userRole.Editor,true]

];

let activeAdmins = users.filter(([,,role,active]) => role === userRole.Admin && active );
console.log(activeAdmins); 

