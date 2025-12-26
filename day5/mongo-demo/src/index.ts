import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product, IProduct } from './models/Product';

// .env dosyasını yükle
dotenv.config();

// MongoDB bağlantı string'i
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable tanımlı değil!');
  process.exit(1);
}

// MongoDB'ye bağlan
async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log('✅ MongoDB bağlantısı başarılı!');
  } catch (error) {
    console.error('❌ MongoDB bağlantı hatası:', error);
    process.exit(1);
  }
}

// Yeni ürün oluştur
async function createProduct(productData: Partial<IProduct>): Promise<IProduct> {
  try {
    const product = new Product(productData);
    const savedProduct = await product.save();
    console.log('✅ Ürün başarıyla oluşturuldu:', savedProduct);
    return savedProduct;
  } catch (error) {
    console.error('❌ Ürün oluşturma hatası:', error);
    throw error;
  }
}

// Tüm ürünleri getir
async function getAllProducts(): Promise<IProduct[]> {
  try {
    const products = await Product.find();
    console.log(`\n📦 Toplam ${products.length} ürün bulundu:`);
    products.forEach((product, index) => {
      console.log(`\n${index + 1}. Ürün:`);
      console.log(`   Ad: ${product.name}`);
      console.log(`   Açıklama: ${product.description}`);
      console.log(`   Fiyat: ${product.price} TL`);
      console.log(`   Kategori: ${product.category || 'Belirtilmemiş'}`);
      console.log(`   Stokta: ${product.inStock ? 'Evet' : 'Hayır'}`);
      console.log(`   Oluşturma: ${product.createdAt}`);
    });
    return products;
  } catch (error) {
    console.error('❌ Ürünleri getirme hatası:', error);
    throw error;
  }
}

// ID'ye göre ürün getir
async function getProductById(id: string): Promise<IProduct | null> {
  try {
    const product = await Product.findById(id);
    if (product) {
      console.log('✅ Ürün bulundu:', product);
    } else {
      console.log('⚠️ Ürün bulunamadı');
    }
    return product;
  } catch (error) {
    console.error('❌ Ürün getirme hatası:', error);
    throw error;
  }
}

// Ürün güncelle
async function updateProduct(id: string, updates: Partial<IProduct>): Promise<IProduct | null> {
  try {
    const product = await Product.findByIdAndUpdate(id, updates, { 
      new: true, // Güncellenmiş dokümanı döndür
      runValidators: true // Validasyonları çalıştır
    });
    if (product) {
      console.log('✅ Ürün başarıyla güncellendi:', product);
    } else {
      console.log('⚠️ Güncellenecek ürün bulunamadı');
    }
    return product;
  } catch (error) {
    console.error('❌ Ürün güncelleme hatası:', error);
    throw error;
  }
}

// Ürün sil
async function deleteProduct(id: string): Promise<boolean> {
  try {
    const result = await Product.findByIdAndDelete(id);
    if (result) {
      console.log('✅ Ürün başarıyla silindi');
      return true;
    } else {
      console.log('⚠️ Silinecek ürün bulunamadı');
      return false;
    }
  } catch (error) {
    console.error('❌ Ürün silme hatası:', error);
    throw error;
  }
}

// Ana fonksiyon - Demo
async function main() {
  try {
    // MongoDB'ye bağlan
    await connectDB();

    console.log('\n🚀 MongoDB TypeScript Demo Başlatılıyor...\n');
    console.log('='.repeat(50));

    // 1. Örnek ürünler oluştur
    console.log('\n📝 ÜRÜN OLUŞTURMA\n');
    
    const product1 = await createProduct({
      name: 'Laptop',
      description: 'Yüksek performanslı dizüstü bilgisayar',
      price: 15000,
      category: 'Elektronik',
      inStock: true
    });

    const product2 = await createProduct({
      name: 'Kablosuz Mouse',
      description: 'Ergonomik tasarımlı kablosuz fare',
      price: 250,
      category: 'Elektronik',
      inStock: true
    });

    const product3 = await createProduct({
      name: 'Mekanik Klavye',
      description: 'RGB aydınlatmalı mekanik klavye',
      price: 800,
      category: 'Elektronik',
      inStock: false
    });

    const product4 = await createProduct({
      name: 'Ofis Sandalyesi',
      description: 'Ergonomik ofis sandalyesi',
        price: 1200,
        category: 'Mobilya',
        inStock: true
    });

    // 2. Tüm ürünleri listele
    console.log('\n' + '='.repeat(50));
    console.log('\n📋 TÜM ÜRÜNLERİ LİSTELE\n');
    await getAllProducts();

    // 3. Belirli bir ürünü getir
    console.log('\n' + '='.repeat(50));
    console.log('\n🔍 ID\'YE GÖRE ÜRÜN GETIR\n');
    await getProductById(product1._id.toString());

    // 4. Ürün güncelle
    console.log('\n' + '='.repeat(50));
    console.log('\n✏️ ÜRÜN GÜNCELLE\n');
    await updateProduct(product2._id.toString(), {
      price: 299,
      inStock: false
    });

    // 5. Güncellenmiş listeyi göster
    console.log('\n' + '='.repeat(50));
    console.log('\n📋 GÜNCELLENMİŞ ÜRÜN LİSTESİ\n');
    await getAllProducts();

    // 6. Ürün sil
    console.log('\n' + '='.repeat(50));
    console.log('\n🗑️ ÜRÜN SİL\n');
    await deleteProduct(product3._id.toString());

    // 7. Son listeyi göster
    console.log('\n' + '='.repeat(50));
    console.log('\n📋 SON ÜRÜN LİSTESİ\n');
    await getAllProducts();

    console.log('\n' + '='.repeat(50));
    console.log('\n✅ Demo tamamlandı!\n');

  } catch (error) {
    console.error('❌ Bir hata oluştu:', error);
  } finally {
    // Bağlantıyı kapat
    await mongoose.connection.close();
    console.log('🔌 MongoDB bağlantısı kapatıldı');
  }
}

// Programı çalıştır
main();
