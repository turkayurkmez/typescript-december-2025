let mysteryBox: any;
mysteryBox = "metin";
mysteryBox = 36;
mysteryBox = true;

mysteryBox = "test";

console.log("mysteryBox içindeki son değer:", mysteryBox);
console.log("mysteryBox içindeki son değer:", mysteryBox.toUpperCase());

let safeBox: unknown;
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

function processData(data: unknown): string | undefined {
  if (
    typeof data === "object" &&
    data !== null &&
    "user" in data &&
    typeof (data as any).user === "object" &&
    "name" in (data as any).user &&
    typeof (data as any).user.name === "string"
  ) {
    return (data as { user: { name: string } }).user.name.toUpperCase();
  }
  return undefined;
}

const result = processData({user:{name:"Orhan"}});

if (result) {
    console.log('İşlenmiş veri:',result);
}
else{
    console.log('Veri işlenemedi');
}
