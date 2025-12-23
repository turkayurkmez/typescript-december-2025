let name: string = "Türkay";

function showName(): void {
  console.log(`Hello, ${name}!`);
}

showName();

function topla(a: number, b: number): number {
  return a + b;
}

const value = topla(3, 5);
console.log(value);

interface Kisi {
  isim: string;
  yas: number;
  role: string;
  email?: string;
}

const kisi1: Kisi = {
  isim: "ahmet",
  role: "user",
  yas: 45,
};

if (kisi1.email) {
    console.log(kisi1.email);
}
