import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppConfig} from './config/app-config';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements  CanActivate{

  constructor(private router: Router, private toastr: ToastrService) { }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loggedUser = localStorage.getItem(AppConfig.AUTHORIZATION_HEADER);
    if (loggedUser !== null){
      return true;
    }
    this.router.navigate(['/login']);
    this.toastr.error('You must login first.');
    return false;
  }
}
