import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product-service.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private products: Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllByCategoriesId();
  }

  public getAllByCategoriesId(): void {
    this.productService.getAllByCategoriesId()
      .subscribe(
        resp => this.products = resp,
        err => console.log('Products not found')
      );
  }


}
