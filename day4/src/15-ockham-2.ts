// function processData(input:string):string {
//     return "a";
// }

// function processData(input:number):number {
//     return 1;
// }

// function processData(input:boolean):boolean {
//     return true;
// }   


// Yukarıdaki gibi her tip için ayrı fonksiyon yazmak yerine generics kullanarak tek bir fonksiyon yazabiliriz:
function genericProcessData<T>(input:T):T {
    return input;
}