import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProductFilters, ProductResponseDto} from '../model/product-model';
import {ProductService} from '../product.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-product-table-view',
  templateUrl: './product-table-view.component.html',
  styleUrls: ['./product-table-view.component.css']
})
export class ProductTableViewComponent implements OnInit {

  columns = ['productId', 'productName', 'productPrice', 'productCategory', 'productActions'];
  dataSource = new MatTableDataSource<ProductResponseDto>();

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  totalNumberOfElements = 0;
  productFilters: ProductFilters = {};

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts(0, 10, this.productFilters);
  }

  changePage(event: PageEvent): void{
    this.getProducts(event.pageIndex, event.pageSize, this.productFilters);
  }

  getProducts(page: number, pageSize: number, productFilter: ProductFilters): void{
    this.productService.getProduct(page, pageSize, productFilter).subscribe((data) => {
        this.dataSource.data = data.content;
        this.totalNumberOfElements = data.totalElements;
      }, error => {
        console.log(error);
      });
  }

  filter(event: KeyboardEvent): void{
    console.log(event);
    this.productFilters.name = this.productFilters.name + event.key;
  }

  filterTable(): void{
    this.getProducts(0, 10, this.productFilters);
  }

  getCategoryId(event: any): void{
    this.productFilters.categoryId = event;
    this.getProducts(0, 10, this.productFilters);
  }

  changeProductType(event: any): void{
    this.productFilters.productType = event.value;
    this.getProducts(0, 10, this.productFilters);
  }

  delete(id: number): void{
    console.log('deleted');
  }

}


