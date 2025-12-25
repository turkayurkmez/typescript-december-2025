function getFirstString(arr: string[]): string | undefined {
  return arr[0];
}

function getFirstNumber(arr: number[]): number | undefined {
  return arr[0];
}

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstString = getFirstElement<string>(["A", "B", "C"]);
const firstBoolean = getFirstElement<boolean>([true, false, true]);

console.log(firstString);
console.log(firstBoolean);

//generic  callback function:

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  const result: T[] = [];

  for (const element of arr) {
    if (predicate(element)) {
      result.push(element);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray<number>(numbers, (x) => x % 2 === 0);
console.log('çift sayılar',evenNumbers);

interface KeyValuePair<K,V>{
    key: K;
    value: V;
}

const pair1: KeyValuePair<string,number> = {
    key:"age",
    value:30
};

console.log('Anahtar:',pair1.key, 'Değer:',pair1.value);

class Stack<T>{
    private items: T[] = [];
    
    push(item: T){
        this.items.push(item);
    }

    pop(): T | undefined{
        return this.items.pop();
    }
    peek(): T |undefined{
        return this.items[this.items.length-1];
    }
    isEmpty():boolean{
        return this.items.length ===0;
    }
 
    size():number{
        return this.items.length;
    }
}

const stack: Stack<number> = new Stack();
stack.push(8);
stack.push(25);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());

const user = {
    id: "u001",
    name:"Osman",
    email:"examle@mail.com"
};

function getProperty<T,K extends keyof T>(obj:T, key:K): T[K] {
    //K extends keyof T: K değeri, T tipinin içinde bir özellik olmak zorunda
    return obj[key]; 
}

const userName = getProperty(user,'name');
const email= getProperty(user,"email");

const product = {
    name:"Ürün A",
    price: 100
};

let name = getProperty(product, "name");

for (const key in user) {
     
     console.log(key, user);
    
    
}