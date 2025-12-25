interface Repository<T> {
  create(entity: T): void;
  getAll(): T[];
  getById(id: number): T;

  searchByName(name: string): T[];
}

class Product {
  constructor(id?: number, name?: string) {}
}

class productRepository implements Repository<Product> {
  create(entity: Product): void {
    console.log("Ürün eklendi");
  }
  getAll(): Product[] {
    return [new Product(1, "A")];
  }
  getById(id: number): Product {
    return new Product(1, "B");
  }
  searchByName(name: string): Product[] {
    return [new Product(1, "A")];
  }
}

class Order{ 
  constructor(id?:number, orderDate?:Date){

  }
}

class OrderRepository implements Repository<Order> {
    create(entity: Order): void {
        console.log('sipariş eklendi')
    }
    getAll(): Order[] {
      return [new Order(1,new Date(2025,31,12))]
    }
    getById(id: number): Order {
      return new Order(1, new Date())
    }
    searchByName(name: string): Order[] {
        throw new Error("Method not implemented.");
    }

}

function searcher<T>(repo: Repository<T>, name:string):T[] {
    return repo.searchByName(name);
}


const orderRepo = new OrderRepository();

const orders = searcher(orderRepo,"test");
console.log(orders);

