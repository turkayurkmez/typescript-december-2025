console.log('İşlem 1....');
console.log('İşlem 2....');
console.log('İşlem 3....');

//Asenkron simülasyon:
console.log("Asenkron örnek...");
console.log("1. İşlem başladı");

setTimeout(() => {
    console.log("2. Asenkron işlem tamamlandı (3 saniye sonra)");
}, 3000);

console.log("3. İşlem (Bloklama yok)");
console.log("4. İşlem ");


//Callback Hell:

setTimeout(() => {
    console.log("CALLBACK HELL DEMO");
    console.log("Kullanıcı bilgileri getiriliyor.")
    setTimeout(() => {
        const siparisler = [{ id: 1, urun: 'Telefon' }];
        console.log('siparişler geldi:', siparisler);
        setTimeout(() => {
            console.log("ürün detayları geliyor....");
            setTimeout(() => {
                const urunDetay = { id: 1, kapasite: 128 };
                /*
                1. Okunması zor.
                2. Bakımı zor.
                3. Hata yönetimi ?

                */
            }, 200);
        }, 100);
    }, 100);
}, 100);

//ÇÖZÜM: Promise:
/* Promise 3 durumda olabilir:
   1. Pending: 
   2. Reject:
   3. Fullfilled
*/
setTimeout(() => {
    const simplePromise = new Promise((resolve, reject) => {
        const islemBasarili = true;
        setTimeout(() => {
            if (islemBasarili) {
                resolve("İşlem başarılı");
            } else {
                reject("İşlem hata verdi");
            }

        }, 150);
    });

    console.log('Promise oluşturuldu... Şimdi başlatılıyor:');

    simplePromise.then((sonuc) => { console.log('then:', sonuc) })
        .catch((err) => console.log(err))
        .finally(() => console.log('her durumda çalışır'));

}, 100);



/* Promise Chaining*/
setTimeout(() => {
    console.log('Chaining demo');
    function kullaniciGetir(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "kullanıcı oluşturuldu" });
            }, 500);
        })
    }

    function siparisGetir(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "siparis oluşturuldu" });
            }, 500);
        })
    }

    function odemeYap(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "odeme oluşturuldu" });
            }, 500);
        })
    }

    kullaniciGetir(1).
        then((result) => {
            console.log(result);
            return siparisGetir(1);
        })
        .then((result2) => {
            console.log(result2);
            return odemeYap(1);
        })
        .then((result3) => {
            console.log(result3);
            console.log('İşlemler bitti');
        });



}, 100);


setTimeout(() => {
    

    async function veriIsle() {
        console.log('Async işlem başladı');
        try {
            const kullanici = await kullaniciGetir(1);
            const siparis = await siparisGetir(2);
            const odeme = await odemeYap(1);
            return "İşlemler bitti";
        } catch (error) {
            
        }
    }

   function kullaniciGetir(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "kullanıcı oluşturuldu" });
            }, 500);
        })
    }

    function siparisGetir(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "siparis oluşturuldu" });
            }, 500);
        })
    }

    function odemeYap(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "odeme oluşturuldu" });
            }, 500);
        })
    }

    veriIsle()
        .then((sonuc)=>{
            console.log(sonuc);
        })
        .catch((x)=>console.log(x));

}, 500);

/*
  
*/
