class GuvenliHesap {
  constructor(
    private hesapNo: string,
    private sahip: string,
    private bakiye: number
  ) {
    if (bakiye < 0) {
      throw new Error("ilk bakiye negatif olamaz");
    }

    console.log(`${sahip} için hesap oluşturuldu. Hesap no: ${hesapNo}`);
  }

  paraYatir(miktar: number): void {
    if (miktar <= 0) {
      console.log("Geçersiz miktar");
      return;
    }

    this.bakiye += miktar;
    console.log(`${miktar} TL yatırıldı. Güncel bakiye: ${this.bakiye}`);
  }

  paraCek(miktar: number): void {
    if (miktar <= 0) {
      console.log("negatif tutar olmaz");
      return;
    }

    if (miktar > this.bakiye) {
      console.log("bakiye yetersizz");
      return;
    }

    this.bakiye -= miktar;
    console.log(`${miktar} TL çekildi. Güncel bakiye: ${this.bakiye}`);
  }

  bakiyeGoster(): void {
    console.log(`${this.sahip} hesabının Güncel bakiyesi: ${this.bakiye}`);
  }
}

const hesap: GuvenliHesap = new GuvenliHesap("TR0001","Osman",10000);

hesap.bakiyeGoster();
