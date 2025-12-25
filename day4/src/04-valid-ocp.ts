//Bir nesne gelişime AÇIK değişime KAPALI olmalı:


abstract class CustomerType{
    abstract getDiscount(price:number):number;
}

class Standard extends CustomerType{
    getDiscount(price: number): number {
        return price * .95;
    }

}

class Silver extends CustomerType{
    getDiscount(price: number): number {
        return price * .9;
    }

}


class Gold extends CustomerType{
    getDiscount(price: number): number {
        return price * .85;
    }

}

class Premium extends CustomerType{
    getDiscount(price: number): number {
        return price * .80;
    }

}

class Customer {
  constructor(public name: string, public type: CustomerType) {}
}

class OrderManagement {
  constructor(public customer: Customer) {}

  calculateTotalPayment(price: number) {
    return this.customer.type.getDiscount(price);
  }
}
   

const customer = new Customer("can", new Premium());
const manager = new OrderManagement(customer);

console.log(manager.calculateTotalPayment(100));
