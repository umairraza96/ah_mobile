import {ResponseData} from '../../types';

export interface Order {
  id: string;
  address: string | null;
  phone_no: string | null;
  alt_phone: string | null;
  user_id: string;
  created_at: string;
  updated_at: string;
  user: OUser;
  order_items: OrderItem[];
}

export interface OUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  created_at: string;
  updated_at: string;
  product: OProduct;
}

export interface OProduct {
  id: string;
  name: string;
  type: string;
  tags: string[];
}

export interface OrdersResponseData extends ResponseData {
  data: Order[];
}

export interface OrderResponseData extends ResponseData {
  data: Order;
}
