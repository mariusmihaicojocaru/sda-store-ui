import {Component, Injector, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {AddressDto, User, UserDto} from '../model/user-models';
import {PaymentDetailsDto} from '../model/order-model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  address: AddressDto = {} as AddressDto;

  user: User = {
    id: 13,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: this.address,
    };

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  update(id: number, user: User): void {
    this.userService.update(this.user.id, this.user).subscribe(data => {
      this.user = data;
      this.toastr.success('Account has been edited successfully');
    }, error => {
      this.toastr.error('Something went wrong.');
    });
}


}
