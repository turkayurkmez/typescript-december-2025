import type { Order } from '../events/OrderEventEmitter';

export class SMSService {
  static onOrderCreated(order: Order): void {
    console.log('📱 SMS SERVİSİ: SMS gönderiliyor...');
    console.log(`   Numara: ${order.customerName} (555-0100)`);
    console.log(`   Mesaj: Siparişiniz alındı. ID: ${order.id}`);
    console.log('   ✅ SMS gönderildi!\n');
  }

  static onOrderShipped(order: Order): void {
    console.log('📱 SMS SERVİSİ: Kargo SMS gönderiliyor...');
    console.log(`   Siparişiniz kargoya verildi: #${order.id}`);
    console.log('   ✅ Kargo SMS gönderildi!\n');
  }
}