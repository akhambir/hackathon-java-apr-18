import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {CartService} from "../services/cart-service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private productList: Array<Product> = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getProductListFromCart();
  }

  public getProductListFromCart() {
    this.cartService.getProductListFromCart()
      .subscribe(
        resp => this.productList = resp,
        err => console.log('Cart can not read')
      );
  }
}
