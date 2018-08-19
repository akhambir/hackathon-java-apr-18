import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  public getProductListFromCart(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      'http://localhost:8080/cartProduct', {observe: "body"}
    );

  }

  deleteProduct(selectedProduct: Product) {
    return this.http.post<Product>(
      'http://localhost:8080/deleteProduct', selectedProduct
    );
  }

  buyAllProducts(productList: Array<Product>) {
    return this.http.post<Array<Product>>(
      'http://localhost:8080/deleteProduct', productList
    );

  }
}
