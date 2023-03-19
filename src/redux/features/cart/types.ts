import {Product} from '../product/products.types';

export interface CartItem {
  product: Product;
  quantity: number;
}
