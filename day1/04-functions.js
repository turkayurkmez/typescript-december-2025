

function sayHello(name) {
    console.log('merhaba', name);
}

sayHello('Ayşe');

const total = function (a, b) {
    return a + b;
}

console.log('toplam:', total(5, 3));

const arrowTotal = (a, b) => a + b;
console.log('Arrow function', arrowTotal(7, 8));

const getSquare = a => a * a;
const getRandom = () => Math.random();

console.log(getSquare(3));
console.log(getRandom());

//literal obje döndürme:
const getPerson = (name, age) => ({
    name: name,
    age: age,
    isActive:true  
});

console.log('Kişi:', getPerson('Türkay',45));

let person = getPerson('a',20);
person.isActive = false;
console.log(person);

//this binding:
const user = {
    name: 'Mehmet',
    regularFunction : function () {
        console.log('Burası regular fonksiyon.', this.name);        
    },
    arrowFunction: ()=>{
        console.log('Burası arrow function',this.name);// callback function this ile bağlanamaz!
    }
}

user.regularFunction();
user.arrowFunction();

const userInfo = {
    name:'Nisanur',
    selamla: function(){
        console.log('Dışarıda this.name', this.name);

        setTimeout(function () {
            console.log('setTimeout içinde this.name',this.name)
        },100);

        setTimeout(()=>{
            console.log('setTimeout (arrow) içinde this.name',this.name)
        },150)


    }
}

userInfo.selamla();