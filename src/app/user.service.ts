import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from './config/app-config';
import {AddressDto, Role, User, UserDto} from './model/user-models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getRoles(): Observable<Array<Role>>{
    return this.httpClient.get<Array<Role>>(AppConfig.API_PATH + '/users/roles');
  }

  register(userDto: UserDto): Observable<UserDto>{
    return this.httpClient.post<UserDto>(AppConfig.API_PATH + '/register', userDto);
  }

  update(id: number, user: User): Observable<UserDto>{
    return this.httpClient.put<UserDto>(AppConfig.API_PATH + '/users/' + id, user);
  }
}
