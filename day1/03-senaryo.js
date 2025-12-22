function calculate() {
    let fiyat = document.getElementById('price').value;
    let adet = document.getElementById('quantity').value;
    let indirimTutari = document.getElementById('discount').value;

    
    let toplam1 = (Number(fiyat) * Number(adet)) * (1- Number(indirimTutari));

    let toplam2 = (+fiyat * +adet) * (1 - +indirimTutari );

    document.getElementById('toplam1').innerText = toplam1;
    document.getElementById('toplam2').innerText = toplam2;

}