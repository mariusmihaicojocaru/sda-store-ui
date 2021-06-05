import {AddressDto} from './user-models';

export interface OrderResponseDto{
  id: number;
  totalPrice: number;
  addressDto: AddressDto;
  orderLines: OrderLineDto[];
}

export interface OrderLineDto{
  id: number;
  productName: string;
  quantity: number;
  price: number;
}
