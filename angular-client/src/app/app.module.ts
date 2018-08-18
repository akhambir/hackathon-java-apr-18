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


const appRoutes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'login', component: LoginUserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    CategoriesComponent,
    HeaderComponent
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
