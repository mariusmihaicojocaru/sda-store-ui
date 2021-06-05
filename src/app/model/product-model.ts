import {CategoryRequestDto, CategoryResponseDto} from './category-model';
import {UserDto} from './user-models';

export interface ProductRequestDto{

  id: number | null;
  name: string;
  description: string;
  thumbnail: string;
  categoryId: number;
  price: number;
  productType: string;
  userAuthor: string;
  stock: number;

}

export interface ProductResponseDto{

  id: number;
  name: string;
  description: string;
  thumbnail: string;
  categoryName: string;
  categoryId: number;
  price: number;
  productType: string;
  userAuthor: UserDto;
  stock: number;

}

export interface ProductType {
  id: number;
  name: string;
}

export interface PaginatedProductResponse{

  content: ProductResponseDto[];
  totalElements: number;

}
// filtrele care le suportam in backend
export interface ProductFilters{

  name?: string | undefined;
  productType?: string | undefined;
  lowPrice?: number | undefined;
  highPrice?: number | undefined;
  categoryId?: string | undefined;
}

export interface ProductOrderLine {
  productId: number;
  quantity: number;
}
