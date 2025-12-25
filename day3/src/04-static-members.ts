class Ogrenci {
  private static ogrenciSayisi: number = 0;

  private ogrenciNo: number = 1000;
  constructor(private isim: string, private soyad: string) {
    this.ogrenciNo += Ogrenci.ogrenciSayisi++;
  }

  public static getogrenciSayisi(): number {
    return Ogrenci.ogrenciSayisi;
  }

  public getSonOgrenciNo(): number {
    return this.ogrenciNo;
  }

  public bilgiGoster(): void {
    console.log(
      `Öğrenci: ${this.isim} ${this.soyad}, öğrenci no: ${this.ogrenciNo}`
    );
  }
}

const st1: Ogrenci = new Ogrenci("ad", "soyad");
const st2: Ogrenci = new Ogrenci("x", "y");
const st3: Ogrenci = new Ogrenci("a", "b");

console.log(Ogrenci.getogrenciSayisi());
console.log(st1);
console.log(st2);
console.log(st2.getSonOgrenciNo());

class StringHelper {
  public static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  public static truncate(str: string, maxLength: number = 10): string {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }

  public static slug(str: string): string {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }
}

console.log(StringHelper.capitalize("türkay"));
console.log(StringHelper.truncate("Çok uzun bir metin!"));
console.log(StringHelper.slug("hadi bakalim12!"));
