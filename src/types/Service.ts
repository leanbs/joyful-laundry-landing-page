export interface Service {
  created_at: string;
  id: number;
  name: string;
  point: number;
  price: string;
  service_group: ServiceGroup;
  unit: string;
  updated_at: string;
}

export interface ServiceGroup {
  created_at: string;
  id: number;
  is_enabled: boolean;
  name: string;
  services: Service[];
  updated_at: string;
}

export interface CartItem extends Service {
  quantity: number;
}
