import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";
import {Observable} from "rxjs/index";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllByCategoriesId(): Observable<Array<Product>> {
    return this.http.get<Array<Category>>(
      'http://localhost:8080/products/categoryId/{id}', {observe: 'body'});
  }
}
