import {AddressDto} from './user-models';
import {ProductOrderLine} from './product-model';

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

export interface OrderRequestDto{
  shoppingCartOrderLineDtoList: ProductOrderLine[];
  paymentDetailsDto: PaymentDetailsDto;
}

export interface PaymentDetailsDto{

  cardHolder: string;
  cardNumber: string;
  expirationDate: string;
  cardProvider: string;
}
