import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category-service";
import {Category} from "../model/category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private category: Category;


  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoryById();
  }

  public getCategoryById(): void {
    this.categoryService.getCategoryById()
      .subscribe(
        resp => this.category = resp,
        err => console.log('Category not found')
      );
  }
}
