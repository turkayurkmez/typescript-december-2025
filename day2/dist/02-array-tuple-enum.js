"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [10, 20, 30, 40, 50];
let names = ["Sema", "Betül", "Ali", "Veli"];
let scores = [90, 80, 70];
let filteredNumbers = numbers.filter(x => x < 30);
console.log(filteredNumbers);
console.log(Array.isArray(filteredNumbers));
let mapped = names.map(n => n.toUpperCase());
console.log(mapped);
let personTuple = ['Türkay', 45, true];
console.log(personTuple);
let nameInfo = personTuple[0];
let ageInfo = personTuple[1];
let stateInfo = personTuple[2];
console.log(nameInfo, ageInfo, stateInfo);
// personTuple: [...personTuple];
//destructured: 
let [username, age, state] = personTuple;
console.log(username, age, state);
let istanbulCoordinate = [41, 28];
console.log(istanbulCoordinate);
istanbulCoordinate.push(60);
console.log(istanbulCoordinate);
//# sourceMappingURL=02-array-tuple-enum.js.map