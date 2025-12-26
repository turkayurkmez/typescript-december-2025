# MongoDB TypeScript Demo

TypeScript ve MongoDB kullanarak Product CRUD operasyonları gösteren bir demo projesi.

## 🚀 Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

## 📦 Kullanım

### Geliştirme Modu (TypeScript direkt çalıştırma):
```bash
npm run dev
```

### Build ve Production:
```bash
npm run build
npm start
```

## 📁 Proje Yapısı

```
mongo-demo/
├── src/
│   ├── models/
│   │   └── Product.ts      # Product model ve schema
│   └── index.ts            # Ana uygulama dosyası
├── dist/                   # Derlenmiş JavaScript dosyaları
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Özellikler

- ✅ MongoDB'ye bağlantı
- ✅ Product modeli (name, description, price, category, inStock)
- ✅ CRUD operasyonları:
  - Create (Ürün oluşturma)
  - Read (Ürün okuma)
  - Update (Ürün güncelleme)
  - Delete (Ürün silme)
- ✅ TypeScript tip güvenliği
- ✅ Mongoose schema validasyonları
- ✅ Otomatik timestamp'ler (createdAt, updatedAt)

## 📝 Product Model

```typescript
interface IProduct {
  name: string;           // Ürün adı
  description: string;    // Ürün açıklaması
  price: number;         // Fiyat
  category?: string;     // Kategori (opsiyonel)
  inStock: boolean;      // Stok durumu
  createdAt: Date;       // Oluşturma tarihi
  updatedAt: Date;       // Güncelleme tarihi
}
```

## 🎯 Demo İşlemleri

Program çalıştığında şu işlemleri gerçekleştirir:

1. MongoDB'ye bağlanır
2. Örnek ürünler oluşturur
3. Tüm ürünleri listeler
4. ID'ye göre ürün getirir
5. Bir ürünü günceller
6. Bir ürünü siler
7. Son durumu gösterir
