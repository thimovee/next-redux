export interface Product {
    id: number;
    name: string;
    price: number;
    imagePath: string;
    color: string;
    brand: string;
  }
  
  export interface CartItem {
    product: Product;
    qty: number;
  }
  