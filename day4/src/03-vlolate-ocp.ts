//Bir nesne gelişime AÇIK değişime KAPALI olmalı:
enum CustomerType {
  Standard = "Standard",
  Silver = "Silver",
  Gold = "Gold",
}

class Customer {
  constructor(public name: string, public type: CustomerType) {}
}

class OrderManagement {
  constructor(public customer: Customer) {}

  calculateTotalPayment(price: number) {
    switch (this.customer.type) {
      case CustomerType.Standard:
        return price * 0.95;
      case CustomerType.Silver:
        return price * 0.9;
      case CustomerType.Gold:
        return price * 0.85;
      default:
        return price;
    }
  }
}

const customer = new Customer("can", CustomerType.Gold);
const manager = new OrderManagement(customer);

console.log(manager.calculateTotalPayment(100));
