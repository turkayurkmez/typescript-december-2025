import { orderEventEmitter, type Order } from "../events/OrderEventEmitter";


export class EmailService {
  // Sipariş oluşturulduğunda email gönder
  static onOrderCreated(order: Order): void {
    console.log("📧 EMAIL SERVİSİ: Email gönderiliyor...");
    console.log(`   Alıcı: ${order.customerName}`);
    console.log(`   Konu: Siparişiniz alındı (#${order.id})`);
    console.log(`   Tutar: ${order.totalAmount} TL`);
    console.log("   ✅ Email gönderildi!\n");
  }

  // Sipariş ödeme yapıldığında
  static onOrderPaid(order: Order): void {
    console.log("📧 EMAIL SERVİSİ: Ödeme onay emaili gönderiliyor...");
    console.log(`   ${order.customerName} için ödeme alındı!`);
    console.log("   ✅ Ödeme onay emaili gönderildi!\n");
  }

  // Sipariş kargoya verildiğinde
  static onOrderShipped(order: Order): void {
    console.log("📧 EMAIL SERVİSİ: Kargo bilgilendirme emaili...");
    console.log(`   Siparişiniz kargoya verildi: #${order.id}`);
    console.log("   ✅ Kargo emaili gönderildi!\n");
  }
}
