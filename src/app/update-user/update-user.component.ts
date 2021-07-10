import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {AddressDto, User} from '../model/user-models';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  address: AddressDto = {} as AddressDto;

  user: User = {} as User;

  constructor(private userService: UserService, private toastr: ToastrService, private httpClient: HttpClient) { }

  // User = new User();

  ngOnInit(): void {
    // this.userService.getUserByEmail(atob(localStorage.getItem('Basic') as string)).subscribe( (data) => {
    //   // var currentAccount = data.result;
    //     // @ts-ignore
    //   if (this.updateUser.value.password !== ''){
    //       currentAccount.password = this.updateUser.value.password;
    //     }
    //   currentAccount.email = this.updateUser.value.email;
    //
    //   }, error => {
    //
    // });


  }

  update(email: string, value: any): void {
    this.userService.update(email, this.user).subscribe(data => {
      this.user = data;
      this.toastr.success('Account has been edited successfully');
    }, error => {
      this.toastr.error('Something went wrong.');
    });
}


}
