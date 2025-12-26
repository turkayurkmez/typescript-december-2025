
interface Product {
  id: number;
  name: string;
  price: number;
    category: string;
}
interface FilterStrategy<T> {
  filter(data: T[]): T[];
}



class PriceFilterStrategy implements FilterStrategy<Product>{
    constructor(private minPrice:number, private maxPrice:number){}

    filter(data: Product[]): Product[] {
        return data.filter(p=>p.price>=this.minPrice && p.price<=this.maxPrice);
    }
}

class CategoryFilterStrategy implements FilterStrategy<Product>{
    constructor(private category:string){}
    filter(data: Product[]): Product[] {
        //kategoriye göre filtreleme yapılacak
        return data.filter(p=>p.category===this.category);
        
    }   
}

class FilterContext{
    private strategies:FilterStrategy<Product>[]=[];
    addStrategy(strategy:FilterStrategy<Product>){
        this.strategies.push(strategy);
    }

    executeStrategies(data:Product[]):Product[]{
      return this.strategies.reduce((acc, strategy)=>{
            return strategy.filter(acc);
        }, data);
    }   
}

interface ProductFilters{
    minPrice?:number;
    maxPrice?:number;
    category?:string;
}

function filterProducts(products:Product[], filters:ProductFilters):Product[]{
    return products.filter(product=>{
        if(filters.minPrice && product.price < filters.minPrice)return false;
        if(filters.maxPrice && product.price > filters.maxPrice)return false;
        if(filters.category && product.category !== filters.category)return false;
        return true;
    });
}   
    
    
