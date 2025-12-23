const kullanici = {
    isim:'Ahmet',
    adres:{
        sehir:'Ankara',
        ilce:'Cankaya'
    }    
};

const kullanici2 = {
    isim:'Türkay',
    adres:{
        sehir:'Eskişehir'
    }
    //dikkat!! adres yok   
};

if (kullanici.adres && kullanici.adres.sehir) {
    console.log('Şehir:',kullanici.adres.sehir);
    
}

console.log("Türkay'ın şehri", kullanici2.adres?.sehir );


const sirket = {
    isim: 'Aselsan',
    calisanlar: {
        muhendisler:{
            senior:{
                isimler:["Ahmet","Zeynep"]
            }
        }
    }
}

const sirket2={
    isim: 'Startup'
}

console.log('Startup mühendisleri:',sirket.calisanlar?.muhendisler?.senior?.isimler);

const urunler = [
    {isim:'Ürün1', fiyat:100},
    {isim:'Ürün2', fiyat:100}

];

console.log(urunler[0]?.isim);

//Nullish Coalescing -- ??

const port = 0;
const kullanilacakPort = port || 3000;
console.log(kullanilacakPort);

const mesaj = "";
const gosterilecekMesaj = mesaj || 'varsayılan';
console.log(gosterilecekMesaj);

const port2 = undefined;
const kullanilacakPort2 = port2 ?? 3000;
console.log(kullanilacakPort2);

if (port2) {
    //falsy ifade: bir değer null, undefined, ya da empty değilse burası true olacaktır.
}

/** Bigint */

console.log('Max_safe_integer',(Number.MAX_SAFE_INTEGER));
let buyukSayi1 = 9007199254740991;
let buyukSayi2 = 9007199254740992;
let buyukSayi3 = 9007199254740993;

console.log(buyukSayi1);
console.log(buyukSayi2);
console.log(buyukSayi3);

const bigint1 = 9007199254740991n;
const bigint2 = 9007199254740992n;
const bigint3 = 9007199254740993n;

console.log(bigint1.toString());
console.log(bigint2.toString());
console.log(bigint3.toString());


console.log('Üs:', 2n**100n);




