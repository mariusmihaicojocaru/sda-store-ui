import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ShoppingCartService} from '../shopping-cart.service';
import {Observable, Subject, Subscription} from 'rxjs';
import {ProductService} from '../product.service';
import {ProductShoppingCartResponseDto} from '../model/shopping-cart-model';
import {ProductOrderLine, ProductResponseDto} from '../model/product-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: ProductResponseDto[] = [];
  productOrderLine: ProductOrderLine[] = [];

  constructor(private toastr: ToastrService,
              private shoppingCartService: ShoppingCartService,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.shoppingCartService.getProductsFromCart().subscribe(data => {
      const productsInCart: ProductShoppingCartResponseDto[] = data.productsInCart;
      productsInCart.forEach(product => {
        this.productService.getProductById(product.id).subscribe(productData => {
          this.products.push(productData);
          this.productOrderLine.push({productId : productData.id, quantity: 1});
        });
      });
    });
  }

  makeOrder(): void {
    this.shoppingCartService.makeOrder(this.productOrderLine).subscribe(data => {
      this.router.navigate(['/order-success']);
    }, error => {
      console.log('error');
    });
  }

  changeQuantity(event: any, productId: number): void{
    this.productOrderLine.forEach( orderLine => {
      if (orderLine.productId === productId){
        orderLine.quantity = event.value as number;
      }
    });
    console.log(this.productOrderLine);
    console.log('Product id is ' + productId);
  }

}
