import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private products: Array<Product> = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllByCategoriesId(this.route.snapshot.paramMap.get('id'));
  }

  public getAllByCategoriesId(id: string): void {
    this.productService.getAllByCategoriesId(id)
      .subscribe(
        resp => this.products = resp,
        err => console.log('Products not found')
      );
  }


}
