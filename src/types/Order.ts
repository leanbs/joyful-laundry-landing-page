import type { Customer } from './Customer';
import type { Service } from './Service';

export interface Order {
  bag: boolean;
  clothes_qty: string;
  created_at: string;
  customer: Customer;
  delivery: boolean;
  delivery_date: string;
  id: number;
  notes: string;
  order_details: OrderDetail[];
  order_no: string;
  order_statuses: OrderStatus[];
  paid_date: string;
  payment_method: any;
  print_laundry: boolean;
  total_price: string;
  updated_at: string;
}

export interface OrderDetail {
  created_at: string;
  id: number;
  machine_dry: string;
  machine_wash: string;
  order: Order;
  price: string;
  quantity: number;
  service: Service;
  total_price: string;
  updated_at: string;
}

export interface OrderStatus {
  clothes_qty: number;
  created_at: string;
  id: number;
  is_last_status: boolean;
  status: number;
  updated_at: string;
}
