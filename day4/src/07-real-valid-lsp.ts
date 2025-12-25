interface PaymentProcessor {
  processPayment(amount: number): void;
}

interface Refundable {
  refund(amount: number): void;
}

class CreditCardPayment implements PaymentProcessor, Refundable {
  refund(amount: number): void {
    console.log("karta iade yapıldı");
  }
  processPayment(amount: number): void {
    console.log("kart ile ödeme yapıldı");
  }
}

class CashPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log("nakit ödeme yapıldı");
  }
}

function handlePayment(payment: PaymentProcessor, amount: number) {
  payment.processPayment(amount);
}

function processRefund(refundble: Refundable, amount: number) {
  refundble.refund(amount);
}


const cash = new CashPayment();
handlePayment(cash,150);
//processRefund(cash,150); //Hata verir, çünkü CashPayment sınıfı Refundable değil!!!