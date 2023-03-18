import {ResponseData} from '../../types';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
  tags: string[];
  category_id: any;
  created_at: string;
  updated_at: string;
}

export interface ProductResponseData extends ResponseData {
  data: Product;
}

export interface ProductsResponseData extends ResponseData {
  data: Product[];
}
