export interface Product {
  id: string;
  price: number;
  title: string;
  description: string;
  count: number;
  imageUrl: string;
}

export type ProductsList = Product[];