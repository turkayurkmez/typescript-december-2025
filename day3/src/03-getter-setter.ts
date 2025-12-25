class Urun{
    constructor(
        private _ad: string,
        private _fiyat: number,
        private _kdvOrani:number
    ){}

    
    public get ad() : string {
        return this._ad;
    }
    
    public set ad(value : string) {
        this._ad = value;
    }
    
    
}

let p: Urun = new Urun('Ürün X', 5, .20);

console.log(p.ad);
p.ad = "Ürün A";
console.log(p.ad);