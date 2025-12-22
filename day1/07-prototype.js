console.log('Constructor function');

function Kisi(isim,yas){
    this.isim =isim;
    this.yas =yas;

    //her instance'da "selamla" fonksiyonu kopyalanır:

    this.selamla = function () {
        console.log('merhaba, ben',isim);
    }


}

let k3 = new Kisi('Derya',42);


//prototype'a eklenirse; tüm instance'lar paylaşır.
Kisi.prototype.yasGoster = function(){
    console.log(this.isim, this.yas, ' yaşında');
}

let k1 = new Kisi('Ahmet',30);
let k2 = new Kisi('Betül',23);
k1.selamla();
k2.selamla();

k1.yasGoster();
k2.yasGoster();
k3.yasGoster();

console.log(k1.yasGoster === k2.yasGoster);

const kisi= new Kisi("Mehmet",20);
console.log(kisi.isim);
console.log('selamla (prototype):', typeof kisi.selamla);

console.log('toString()(Object.protoype da:)', typeof kisi.toString);
console.log('Hiçbir yerde yok:', kisi.yok);

console.log('Prototype Chain');
console.log('1. kişi objesi', kisi);
console.log('2. kişi.prototype', Object.getPrototypeOf(kisi));
console.log('3. object.prototype', Object.getPrototypeOf(Object.getPrototypeOf(kisi)));
console.log('4. null', Object.getPrototypeOf( Object.getPrototypeOf(Object.getPrototypeOf(kisi))));

console.log(kisi.__proto__);
console.log(Object.getPrototypeOf(kisi));
console.log(kisi.__proto__ === Object.getPrototypeOf(kisi) );





