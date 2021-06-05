import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthorizationService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.doAuth(this.email, this.password).subscribe((data) => {
      localStorage.setItem('ROLE', data.authorities[0].authority);
      this.router.navigate(['/product-card-view']);
    }, errorMessage => {
      this.toastr.error('User or password incorrect.');
      console.log(errorMessage);
    });
  }

}
