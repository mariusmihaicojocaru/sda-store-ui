import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {RouteGuardService} from './route-guard.service';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {CategoriesTreeViewComponent} from './categories-tree-view/categories-tree-view.component';
import {ProductTableViewComponent} from './product-table-view/product-table-view.component';
import {ProductCardViewComponent} from './product-card-view/product-card-view.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductsComponent, canActivate: [RouteGuardService]},
  {path: 'categories', component: CreateCategoryComponent},
  {path: 'categories-tree-view', component: CategoriesTreeViewComponent},
  {path: 'product-table-view', component: ProductTableViewComponent},
  {path: 'product-card-view', component: ProductCardViewComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'my-orders', component: OrderPageComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
