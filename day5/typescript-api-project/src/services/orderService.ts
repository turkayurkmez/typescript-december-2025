import { type Order } from '../events/OrderEventEmitter';
import { orderEventEmitter } from '../events/OrderEventEmitter';
import { v4 as uuidv4 } from 'uuid'; // UUID için (npm i uuid @types/uuid)

export class OrderService {
  // Sipariş oluştur
  static createOrder(customerName: string, items: string[], totalAmount: number): Order {
    const order: Order = {
      id: uuidv4(),
      customerName,
      items,
      totalAmount,
      status: 'pending'
    };

    console.log('🛒 YENİ SİPARİŞ OLUŞTURULUYOR...');
    console.log(`   Müşteri: ${customerName}`);
    console.log(`   Tutar: ${totalAmount} TL\n`);

    // EVENT YAYINLA! (zil çaldı! 🔔)
    orderEventEmitter.emit('orderCreated', order);

    return order;
  }

  // Ödeme al
  static processPayment(order: Order): void {
    console.log('💳 ÖDEME ALINIYOR...\n');
    
    order.status = 'paid';
    
    // EVENT YAYINLA!
    orderEventEmitter.emit('orderPaid', order.id);
  }

  // Kargoya ver
  static shipOrder(order: Order): void {
    console.log('🚚 KARGOYA VERİLİYOR...\n');
    
    order.status = 'shipped';
    
    // EVENT YAYINLA!
    orderEventEmitter.emit('orderShipped', order.id, 'TRACK123456');
  }

  // İptal et
  static cancelOrder(order: Order, reason: string): void {
    console.log('❌ SİPARİŞ İPTAL EDİLİYOR...\n');
    
    order.status = 'cancelled';
    
    // EVENT YAYINLA!
    orderEventEmitter.emit('orderCancelled', order.id, reason);
  }
}