console.log('VAR problemleri');
//1. Hoisting:
console.log(notDefined);
var notDefined = 'burada tanımlı';

//2. function scope -> Block scope değil!
if (true) {
    var city = 'Ankara';
    console.log('if scope unda değer', city);
}

console.log('if scope dışında değer', city);
//3. Birden fazla tanımlama:
var message = 'Hello';
var message ='World';
console.log(message);

//4. for döngüsüne ne demeli?
for (let index = 0; index < 5; index++) {
    setTimeout(function(){
        console.log('Beklenen: ',index,'Gelen:',index);
    },1000);
    
}
//LET ve const kullanımı:
const pi = 3.14;
const name = 'Aselsan';

let score = 50;
score += 10;

// console.log(yok)
// let yok = 'burada tanımlı';

if (true) {
    let country = 'Türkiye';
    console.log(country);
}

// if (!country) {
//     console.log('Bu scope da country yok');
// }


// let tanım = 5;
// let tanım = 8;

const user = {
    isim: 'türkay',
    yas:45
};

user.isim = "Serdar";
console.log(user);