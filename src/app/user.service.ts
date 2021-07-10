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

  update(email: string, user: User): Observable<User>{
    return this.httpClient.put<User>(AppConfig.API_PATH + '/users/' + email, user);
  }

  getUserByEmail(email: string): Observable<any>{
    return this.httpClient.get<UserDto>(AppConfig.API_PATH + '/user/' + email);
  }
}
