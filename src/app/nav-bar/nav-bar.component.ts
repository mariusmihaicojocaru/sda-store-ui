import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';
import {AppConfig} from '../config/app-config';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() numberOfProductsInCart = 0;
  @Output() searchChangeEvent: EventEmitter<string> = new EventEmitter<string>();
  role = localStorage.getItem('ROLE');
  userName = 'Marius';

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem(AppConfig.AUTHORIZATION_HEADER)) {
      this.shoppingCartService.getProductsFromCart().subscribe((data) => {
        this.numberOfProductsInCart = data.productsInCart.length;
      });
    }
  }

  searchProduct(event: any): void {

    const formValue = event.target.value;
    this.searchChangeEvent.emit(formValue);
  }

  goToShoppingCart(): void{
    this.router.navigate(['/shopping-cart']);
  }

  logout(): void{
    localStorage.clear();
    this.ngOnInit();
    this.router.navigate(['/login']);
  }

  readUser($event: any): void{
    this.userName = $event.target.value;
  }
}


