export interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  color: string;
  brand: string;
  description: string;
  details: { id: number, detail: string}[];
  category: string;
  rating: number;
  reviews: { id: number, title: string, name: string, description: string, rating: number, date: string }[];
  isAvailable: boolean;
}

export interface CartItem {
  product: Product;
  qty: number;
}
