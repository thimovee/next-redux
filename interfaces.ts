export interface Product {
    id: number;
    name: string;
    price: number;
    imagePath: string;
    color: string;
    brand: string;
    description: string;  
    details: string;
    category: string;
    rating: number;
    reviews: { id: number, title: string, description: string, rating: number, date:string }[];
    isAvailable: boolean;
  }
  
  export interface CartItem {
    product: Product;
    qty: number;
  }
  