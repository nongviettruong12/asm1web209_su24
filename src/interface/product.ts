export interface IProduct {
    id?:string;
    name: string;
    price: number;
    image: string;
    brand: string;
    description: string;
}
export type IproductLite  = Pick <IProduct,'name' | 'price'|'image' | 'brand'|'description'> 