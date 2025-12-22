console.log("Scope ve closure");

const globalDegisken = 'Ben globalim';

function fonksiyon1() {
    console.log('Fonksiyon içinden', globalDegisken);    //Erişilir.
}

fonksiyon1();
function fonksiyon2() {
    const yerelDegisken = 'Ben yerelim';
    console.log('İçeriden:', yerelDegisken);
}

fonksiyon2();

//console.log(yerelDegisken); //erişemez....

if (true) {
    const blokDegiskeni = "if bloğu içindeyim";
    let blok2 = 'let ile tanımladık';
    var eskiYontem = 'var ile tanımlandı';

    console.log(blok2);
}

console.log(eskiYontem);


const deger1 = 'Seviye 1';
function seviye1() {
    const deger2 = 'Seviye 2';

    function seviye2() {
        const deger3 = 'Seviye 3';

        console.log(deger3); //kendi değişkeni
        console.log(deger2); // Üst fonksiyon
        console.log(deger1); // global değişken
    }

    seviye2();
    //console.log(deger3);
}

seviye1();

console.log('Closure Nedir?');

function disFonksiyon() {
    const mesaj = 'Merhaba';
    function icFonksiyon() {
        console.log(mesaj);

    }
    return icFonksiyon;//DİKKAT iç fonksiyon döndürdük
}

const beniCagir = disFonksiyon();
beniCagir();
//Erişilebiliyor çünkü icFonksiyon, disFonksiyon'un scope'unu hatırlıyor!!!!

function sayacOlustur() {
    let sayac = 0;
    return {
        arttir: function () {
            sayac++;
            console.log('sayac', sayac);
        },
        azalt: function () {
            sayac--;
            console.log('sayac:', sayac);
        },
        degerGetir: function () {
            return sayac;
        }


    }


}

const myCounter = sayacOlustur();
myCounter.arttir();
myCounter.arttir();
myCounter.arttir();
myCounter.azalt();
console.log('Current: ', myCounter.degerGetir());

const sayac2 = sayacOlustur();
sayac2.arttir();
console.log(sayac2.degerGetir());