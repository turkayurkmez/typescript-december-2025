abstract class Document {
  constructor(public title: string) {}

  copy(from: string, to: string): void {
    console.log("dosya kopyalandı");
  }

  move(from: string, to: string): void {
    console.log("dosya kopyalandı");
  }

  abstract open(): void;
  abstract save(): void;

}

interface Printable{
    print():void;
}

class WordDocument extends Document implements Printable {
  open(): void {
    console.log("word açıldı", this.title);
  }
  save(): void {
    console.log("word kaydedildi", this.title);
  }
  print(): void {
    console.log("word çıktısı alındı", this.title);
  }
}

class ExcelDocument extends Document implements Printable {
  open(): void {
    console.log("excel açıldı", this.title);
  }
  save(): void {
    console.log("excel kaydedildi", this.title);
  }
  print(): void {
    console.log("excel çıktısı alındı", this.title);
  }
}

class PdfDocument extends Document{
      open(): void {
    console.log("pdf açıldı", this.title);
  }
  save(): void {
    console.log("pdf kaydedildi", this.title);
  }
 
}

class DocumentPrinter{
    print(document: Printable){
        document.print();
    }
}

const word: WordDocument = new WordDocument('Sözleşme.docx');
const excel: ExcelDocument = new ExcelDocument('rapor.xlsx');
const pdf: PdfDocument = new PdfDocument('oryantasyon.pdf');
const printer: DocumentPrinter = new DocumentPrinter();

printer.print(word);
printer.print(excel);
printer.print(pdf);  