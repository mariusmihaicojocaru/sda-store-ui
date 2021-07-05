import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ProductFilters, ProductResponseDto} from '../model/product-model';
import {PageEvent} from '@angular/material/paginator';
import {ShoppingCartService} from '../shopping-cart.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-card-view',
  templateUrl: './product-card-view.component.html',
  styleUrls: ['./product-card-view.component.css']
})
export class ProductCardViewComponent implements OnInit {

  products: ProductResponseDto[] = [];
  // de luat de dincolo
  totalNumberOfElements = 0;
  totalNumberOfElementsInCart = 0;
  paginatorSize = 10;
  productFilters: ProductFilters = {
    name: '',
    lowPrice: 0,
    productType: ''
  };
  productTypes: string[] = [];

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService, private toastr: ToastrService) { }

  ngOnInit(): void {
   this.getProducts(0, this.paginatorSize, {});
   this.productService.getProductType().subscribe((data) => {
      this.productTypes = data;
    });
  }

  changePage(event: PageEvent): void{
    this.paginatorSize = event.pageSize;
    this.getProducts(event.pageIndex, event.pageSize, this.productFilters);
  }

  getProducts(page: number, pageSize: number, filters: ProductFilters): void{
    console.log(filters);
    this.productService.getProduct(page, pageSize, filters).subscribe(
      (data) => {
      this.products = data.content;
      this.totalNumberOfElements = data.totalElements;
    });
  }

  addProductToCart(productId: number): void{
    this.shoppingCartService.addProductToCart(productId).subscribe((data) => {
      this.totalNumberOfElementsInCart = data.productsInCart.length;
    }, error => {
      this.toastr.warning('Product already in cart.');
    });
  }

  filterProducts(event: string): void {
    this.productFilters.name = event;
    this.getProducts(0, this.paginatorSize, this.productFilters);
  }

  changeLowPrice(event: any): void{
    if (event.target.value === ''){
      this.productFilters.lowPrice = 0;
    }else {
      this.productFilters.lowPrice = event.target.value;
    }
    this.getProducts(0, this.paginatorSize, this.productFilters);
  }

  changeHighPrice(event: any): void{
    this.productFilters.highPrice = event.target.value;
    this.getProducts(0, this.paginatorSize, this.productFilters);
  }

  changeProductType(event: any): void{
    this.productFilters.productType = event.value;
    this.getProducts(0, this.paginatorSize, this.productFilters);
  }

  filterProductsByCategory(event: any): void {
    this.productFilters.categoryId = event;
    this.getProducts(0, this.paginatorSize, this.productFilters);
  }
}
