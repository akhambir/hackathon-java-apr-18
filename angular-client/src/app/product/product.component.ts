import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product-service.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product: Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductById(this.route.snapshot.paramMap.get('id'));
  }

  public getProductById(id: string): void {
    this.productService.getProductById(id)
      .subscribe(
        resp => this.product = resp,
        err => console.log('Product not found')
      );
  }
}
