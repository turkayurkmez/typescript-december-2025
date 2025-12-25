abstract class Payment {
  abstract processPayment(amount: number): void;

  refund(amount: number): void {
    console.log(amount, "TL iade edildi");
  }
}

class CreditCardPayment extends Payment {
  processPayment(amount: number): void {
    console.log("kk ile ", amount, "TL ödendi");
  }
}

class CashPayment extends Payment {
  processPayment(amount: number): void {
    console.log("nakit olarak", amount, "TL ödendi");
  }

  refund(amount: number): void {
    throw new Error("Nakit ödemede iade alınmıyor");
  }
}
