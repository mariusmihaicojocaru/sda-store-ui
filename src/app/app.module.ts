import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import {ToastrModule} from 'ngx-toastr';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {
  CategoriesTreeViewComponent,
  CategoryDeleteDialogComponent,
  CategoryUpdateDialogComponent
} from './categories-tree-view/categories-tree-view.component';
import {MatTreeModule} from '@angular/material/tree';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductTableViewComponent} from './product-table-view/product-table-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductCardViewComponent } from './product-card-view/product-card-view.component';
import {MatCardModule} from '@angular/material/card';
import {AuthInterceptorService} from './auth-interceptor.service';
import {MatBadgeModule} from '@angular/material/badge';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderPageComponent } from './order-page/order-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    NavBarComponent,
    CreateCategoryComponent,
    CategoriesTreeViewComponent,
    CategoryDeleteDialogComponent,
    CategoryUpdateDialogComponent,
    CreateProductComponent,
    ProductTableViewComponent,
    ProductCardViewComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatListModule
  ],
    providers: [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
