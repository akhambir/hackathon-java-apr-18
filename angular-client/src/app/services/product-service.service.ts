import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllByCategoriesId(id: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      'http://localhost:8080/products/categoryId/'.concat(id), {observe: 'body'});
  }

  public getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(
      'http://localhost:8080/product/'.concat(id), {observe: 'body'});
  }
}
