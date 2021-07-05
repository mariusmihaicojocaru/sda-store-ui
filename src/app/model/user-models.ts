export interface Role{
  name: string;
  id: number;
}

export interface UserDto{
  id: number;
  email: string;
  password: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  messagingChannel: string;
  role: string;
  address: AddressDto;
}

export interface AddressDto{
  country: string;
  city: string;
  street: string;
  zipcode: string;
}

export interface User{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: AddressDto;
}
