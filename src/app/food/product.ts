export type ProductType = 'Chinese' | 'South Indian' | 'North Indian';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  type?: ProductType[];
  picture?: string;
}

export interface ProductFilter {
  type?: ProductType;
}
