import type { Order } from '../events/OrderEventEmitter';

export class WarehouseService {
  static onOrderPaid(order: Order): void {
    console.log('📦 DEPO SERVİSİ: Sipariş hazırlanıyor...');
    console.log(`   Sipariş: #${order.id}`);
    console.log(`   Ürünler: ${order.items.join(', ')}`);
    console.log('   🔄 Ürünler toplanıyor...');
    console.log('   📦 Paketleniyor...');
    console.log('   ✅ Kargoya hazır!\n');
  }
}