import { Component, OnInit } from '@angular/core';
import { IngridientClientService } from './../../services/ingridient-client/ingridient-client.service';
import { IngredientCategoryModel } from './../../models/ingredient.model';

@Component({
  selector: 'aqn-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  list: IngredientCategoryModel[] = [];
  constructor(private ingridientClientService: IngridientClientService) {}

  ngOnInit(): void {
    this.ingridientClientService
      .getCategories()
      .subscribe((b) => (this.list = b));
  }
}
