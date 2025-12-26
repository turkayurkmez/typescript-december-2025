import type { Order } from '../events/OrderEventEmitter';

export class AnalyticsService {
  // Tüm event'leri dinleyen servis (Big Brother! 👁️)
  static trackOrderCreated(order: Order): void {
    console.log('📊 ANALİTİK: Yeni sipariş kaydedildi');
    console.log(`   Sipariş ID: ${order.id}`);
    console.log(`   Tutar: ${order.totalAmount} TL`);
    console.log(`   Ürün Sayısı: ${order.items.length}`);
  }

  static trackOrderCancelled(order: Order, reason: string): void {
    console.log('📊 ANALİTİK: ⚠️ Sipariş iptal edildi!');
    console.log(`   Sipariş ID: ${order.id}`);
    console.log(`   İptal Nedeni: ${reason}`);
    console.log(`   Kayıp Gelir: ${order.totalAmount} TL`);
  }
}