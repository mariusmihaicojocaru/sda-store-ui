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

// export class AddressDto {
//   country: string | undefined;
//   city: string | undefined;
//   street: string | undefined;
//   zipcode: string | undefined;
// }

export interface User{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: AddressDto;
}

// export class User{
//   firstName: string | undefined;
//   lastName: string | undefined;
//   email: string | undefined;
//   password: string | undefined;
//   address: AddressDto | undefined;
//
// }
