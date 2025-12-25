class Asci {
  constructor(public isim: string, public yas: number) {}

  pisir(yemek: Yemek): void {
    yemek.pisir();
    yemek.servisEt();
  }
}

class Yemek {
  protected pistiMi: boolean = false;
  protected pisirmeBaslangic?: Date;

  constructor(
    protected yemekAdi: string,
    protected pisirmeSuresi: number,
    protected malzemeler: string[]
  ) {
    console.log(yemekAdi, "yemeği oluşturuldu");
  }

  public pisir(): void {
    console.log(`${this.yemekAdi}, ${this.pisirmeSuresi} dakikada pişti`);
  }

  public servisEt(): void {
    console.log(`${this.yemekAdi}, yanında pilav ile servis edildi`);
  }
}

class EtYemek extends Yemek {
  constructor(
    yemekAdi: string,
    pisirmeSuresi: number,
    malzemeler: string[],
    private etTuru: "Tavuk" | "Dana" | "Kuzu",
    private pisirmeYontemi: "Izgara" | "Fırın" | "Haşlama"
  ) {
    super(yemekAdi, pisirmeSuresi, malzemeler);
    console.log(`${this.etTuru} edinden, ${this.yemekAdi} yemeği yapıldı`);
  }
}

class Tatli extends Yemek {
  constructor(
    yemekAdi: string,
    pisirmeSuresi: number,
    malzemeler: string[],
    private tatliTuru: "Sütlü" | "Çikolatalı" | "Meyveli"
  ) {
    super(yemekAdi, pisirmeSuresi, malzemeler);
    console.log(`${this.tatliTuru} bir , ${this.yemekAdi} tatlısı yapıldı`);
  }

  public servisEt(): void {
    console.log(`${this.yemekAdi}, dondurma ile sunuldu`);
  }
}

const cooker: Asci = new Asci("Tonguç", 30);

const kofte: EtYemek = new EtYemek("Köfte", 30, ["", ""], "Dana", "Izgara");
const magnolia: Tatli = new Tatli("Magnolia", 60, [], "Sütlü");

cooker.pisir(kofte);
cooker.pisir(magnolia);
