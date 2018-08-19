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
    console.log('ping0');
    this.getAllByCategoriesId(this.route.snapshot.paramMap.get('id'));
    console.log('ping1');
  }

  public getAllByCategoriesId(id: string): void {
    console.log('ping2');
    this.productService.getAllByCategoriesId(id)
      .subscribe(
        resp => this.products = resp,
        err => console.log('Products not found')
      );
  }


}
