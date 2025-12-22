const urunler1 = [
    { isim: 'Laptop', fiyat: 100000, kategori: 'Elektronik', stokta: true },
    { isim: 'Telefon', fiyat: 500000, kategori: 'Elektronik', stokta: true },
    { isim: 'Koltuk', fiyat: 5000, kategori: 'Mobilya', stokta: false },
    { isim: 'Masa', fiyat: 500, kategori: 'Mobilya', stokta: true },
    { isim: 'Tişört', fiyat: 500, kategori: 'Giyim', stokta: true },

]

function yeniUrunEkle(yeniUrun) {
    urunler1.push(yeniUrun);
}

const sonuc = urunler1.filter(x => x.stokta)
    .filter(x => x.kategori === "Elektronik")
    .filter(x => x.fiyat > 200000)
    .map(urun => ({
        ...urun,
        kdvliFiyat: urun.fiyat * 1.2
    }));

console.log(sonuc);

const notlar = [95, 80, 95, 80, 70, 50, 65, 70, 20];

const notIstatistikleri = {
    ortalama: notlar.reduce((toplam, not) => toplam + not, 0) / notlar.length,
    enYuksek: notlar.reduce((max, not) => (not > max ? not : max)),
    enDusuk: notlar.reduce((min, not) => (not < min ? not : min)),
    gecenler: notlar.filter(not => not > 50),
    kalanlar: notlar.filter(not => not < 50),


};

console.log('istatistikler:', notIstatistikleri);

const sayilar = [1, 2, 3, 4, 5];

const ilkCift = sayilar.find(x => x % 2 === 0);
const index = sayilar.findIndex(x => x > 3);
//en az 1 koşulu sağlayan var mı?

const dorttenBuyukVarmi = sayilar.some(sayi=>sayi>4);

const hepsiPozitifMi = sayilar.every(x=>x>0);

const ucVarmi = sayilar.includes(3);


sayilar.forEach((sayi,index)=>{

    console.log('index:',index, 'sayı:',sayi);
});

console.log(ilkCift);

const karisik = [5,9,0,2,7,1];
const sirali = [...karisik].sort(); //spread ile kopyalandı.
console.log('orijinal',karisik);
console.log('sıralı',sirali);

const ogrenciler = [
  {isim:'Ahmet', not: 85},
  {isim:'Zeynep', not: 92},
  {isim:'Mehmet', not: 70}
];

const notaGoreSirala = ogrenciler.sort((a,b)=> a.not - b.not);
console.log(notaGoreSirala);

//Slice:

const parca = sayilar.slice(1,3);
console.log('slice(1,3):',parca);

//splice:
const array = [1,2,3,4,5];
const kopya = [...array];
const newArray = [100,90,45]
const cikarilanlar = array.toSpliced(1,1,newArray);

console.log(cikarilanlar);
console.log(array);