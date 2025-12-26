import { orderEventEmitter, type Order } from '../events/OrderEventEmitter';
import { EmailService } from '../services/emailService';
import { SMSService } from '../services/smsService';
import { WarehouseService } from '../services/warehouseService';
import { AnalyticsService } from '../services/analyticService';

// Tüm event listener'larını kaydet (zilleri bağla! 🔌)
export function setupOrderEventListeners(): void {
  console.log('🎪 Event listener\'lar kaydediliyor...\n');

  // Order Created - 3 servis dinliyor
  orderEventEmitter.on('orderCreated', EmailService.onOrderCreated);
  orderEventEmitter.on('orderCreated', SMSService.onOrderCreated);
  orderEventEmitter.on('orderCreated', AnalyticsService.trackOrderCreated);

  // Order Paid - 2 servis dinliyor
  orderEventEmitter.on('orderPaid', (orderId: string) => EmailService.onOrderPaid({ id: orderId } as Order));
  orderEventEmitter.on('orderPaid', (orderId: string) => WarehouseService.onOrderPaid({ id: orderId } as Order));

  // Order Shipped - 2 servis dinliyor
  orderEventEmitter.on('orderShipped', (orderId: string, trackingNumber: string) => EmailService.onOrderShipped({ id: orderId } as Order));
  orderEventEmitter.on('orderShipped', (orderId: string, trackingNumber: string) => SMSService.onOrderShipped({ id: orderId } as Order));  
  // Order Cancelled - sadece analytics dinliyor
  orderEventEmitter.on('orderCancelled', (orderId: string, reason: string) => AnalyticsService.trackOrderCancelled({ id: orderId } as Order, reason));

  console.log('✅ Tüm event listener\'lar hazır!\n');
}