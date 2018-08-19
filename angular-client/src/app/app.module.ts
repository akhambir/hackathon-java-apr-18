import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user-service';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import {ProductService} from "./services/product-service.service";
import {CategoryService} from "./services/category-service";
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';


const appRoutes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'login', component: LoginUserComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'product/:id', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    CategoriesComponent,
    CartComponent,
    HeaderComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      {enableTracing: true}),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
