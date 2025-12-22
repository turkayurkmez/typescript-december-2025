console.log("5" + 3);
console.log("5" - 3);
console.log("5" * 3);
console.log("5" / 3);

console.log("5" / "2");

console.log("5" / "a");
console.log("10" > 5);
console.log("10" < "5");

console.log(true + true + true);
console.log([1] + [2]);
console.log([1, 2] + [3, 4]);

//gevşek eşitlik (loose equality)
console.log(5 == '5'); //true
console.log(0 == false);
console.log('' == false);
console.log(null == undefined);
console.log('' == 0);

//sıkı eşitlik (strict equality)
console.log(5 === '5');
console.log(5 === '5'); //true
console.log(0 === false);
console.log('' === false);
console.log(null === undefined);
console.log('' === 0);

let userInput = '0'; //kullanıcı boş bırakmış....
if (userInput == false) {
    console.log('Kullanıcı giriş yapmamış');
}

if (userInput === false) {
    console.log('bu satır asla çalışmayacak')
}
else {
    console.log("String '0' boolean false'a eşit değil!!!");
}

