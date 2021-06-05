import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {AddressDto, Role, UserDto} from '../model/user-models';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  roles: Role[] = [];
  notificationOptions: string[] = ['MAIL', 'EMAIL'];
  address: AddressDto = {} as AddressDto;
  user: UserDto = {
    address: this.address
  } as UserDto;

  ngOnInit(): void {
    this.userService.getRoles().subscribe((data) => {
      this.roles = data;
    }, errorMessage => {
      this.toastr.error('Cannot return roles.');
    });
  }

  register(): void{
    this.userService.register(this.user).subscribe((data) => {
      this.router.navigate(['/login']);
    }, errorMessage => {
      this.toastr.error('User already registered');
      console.log('error', errorMessage); // TODO toastrService error
    });
  }

}
