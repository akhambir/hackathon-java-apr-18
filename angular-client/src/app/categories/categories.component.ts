import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../services/category-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  private categories: Array<Category> = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  public getAllCategories(): void {
    this.categoryService.getAllCategories()
      .subscribe(
        resp => this.categories = resp,
        err => console.log('Category can not read')
      );
  }
}
