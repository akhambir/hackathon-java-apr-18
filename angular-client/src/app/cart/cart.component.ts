/*
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
*/

import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {CartService} from "../services/cart-service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private productList: Array<Product> = [
    {id: '1', name: 'Samsung', price: '200'},
    {id: '2', name: 'Samsung2', price: '220'},
    {id: '3', name: 'Samsung3', price: '230'}
  ];
  private selectedProduct: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
/*
    this.getProductListFromCart();
*/
  }

  /*public getProductListFromCart() {
    this.cartService.getProductListFromCart()
      .subscribe(
        resp => this.productList = resp,
        err => console.log('Cart can not read')
      );
  }*/
  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  deleteProduct(selectedProduct: Product) {
    this.cartService.deleteProduct(selectedProduct);
  }

  buyAllProducts(productList: Array<Product>) {
    this.cartService.buyAllProducts(productList);
  }
}

