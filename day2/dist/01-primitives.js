"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mysteryBox;
mysteryBox = "metin";
mysteryBox = 36;
mysteryBox = true;
mysteryBox = "test";
console.log("mysteryBox içindeki son değer:", mysteryBox);
console.log("mysteryBox içindeki son değer:", mysteryBox.toUpperCase());
let safeBox;
safeBox = "Metin";
safeBox = 100;
safeBox = true;
//type narrowing'e izin vermek için unknown:
if (typeof safeBox === "string") {
    console.log(safeBox.toUpperCase());
}
// const users = getUsers()
// function getUsers():unknown {
//     return {};
// }
function processData(data) {
    if (typeof data === "object" &&
        data !== null &&
        "user" in data &&
        typeof data.user === "object" &&
        "name" in data.user &&
        typeof data.user.name === "string") {
        return data.user.name.toUpperCase();
    }
    return undefined;
}
const result = processData({ user: { name: "Orhan" } });
if (result) {
    console.log('İşlenmiş veri:', result);
}
else {
    console.log('Veri işlenemedi');
}
//# sourceMappingURL=01-primitives.js.map