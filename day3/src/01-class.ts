class BankaHesabi{

    // public hesapNo: string;
    // public sahip : string;

    // public bakiye:number;

    constructor(public hesapNo:string, public sahip:string, public bakiye:number){
        // this.bakiye = bakiye;
        // this.hesapNo = hesapNo;
        // this.sahip = sahip;
        if (bakiye<0) {
            throw new Error('ilk bakiye negatif olamaz');
        }

        console.log(`${sahip} için hesap oluşturuldu. Hesap no: ${hesapNo}`);
    }

    paraYatir(miktar: number):void{
        if (miktar<=0) {
            console.log('Geçersiz miktar');
            return;
        }

      this.bakiye += miktar;
      console.log(`${miktar} TL yatırıldı. Güncel bakiye: ${this.bakiye}`);
    }

    paraCek(miktar:number):void{
        if (miktar<=0) {
            console.log('negatif tutar olmaz');
            return
        }

        if (miktar > this.bakiye ) {
            console.log('bakiye yetersizz');
            return;
        }

        this.bakiye -= miktar;
      console.log(`${miktar} TL çekildi. Güncel bakiye: ${this.bakiye}`);

    }

    bakiyeGoster():void{
      console.log(`${this.sahip} hesabının Güncel bakiyesi: ${this.bakiye}`);

    }



}

const hesap: BankaHesabi =new BankaHesabi("X001",'User A',1000);
const hesap2: BankaHesabi = new BankaHesabi("X002","User B",5000);

hesap.paraYatir(500);
hesap.paraCek(750);
hesap.bakiyeGoster();

hesap.bakiye = 15000000;

