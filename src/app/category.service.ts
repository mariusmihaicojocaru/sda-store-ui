import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from './config/app-config';
import {CategoryRequestDto, CategoryResponseDto} from './model/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  CATEGORIES_API = AppConfig.API_PATH + '/categories';

  findAll(): Observable<Array<CategoryResponseDto>>{
    return this.httpClient.get<Array<CategoryResponseDto>>(this.CATEGORIES_API + '/all');
  }

  findAllRootCategories(): Observable<any>{
    return this.httpClient.get(this.CATEGORIES_API + '');
  }

  create(categoryRequestDto: CategoryRequestDto): Observable<CategoryResponseDto>{
    return this.httpClient.post<CategoryResponseDto>(this.CATEGORIES_API, categoryRequestDto);
  }

  delete(id: number): Observable<any>{
   return this.httpClient.delete(this.CATEGORIES_API + '/delete/' + id);
  }

  update(id: number, updatedName: CategoryRequestDto): Observable<CategoryResponseDto> {
    return this.httpClient.put<CategoryResponseDto>(this.CATEGORIES_API + '/' + id, {name : updatedName});
  }

}
