import { Component, OnInit, Input } from '@angular/core';
import { IngredientCategoryModel } from './../../models/ingredient.model';
import { ViewType } from 'src/app/models/common.model';
import { CategoryClientService } from './../../services/category-client/category-client.service';

@Component({
  selector: 'aqn-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  list: IngredientCategoryModel[] = [];
  constructor(private categoryClientService: CategoryClientService) {}

  ngOnInit(): void {
    this.loadList();
  }

  deleteCategory(id: string): void {
    this.categoryClientService.delete(id).subscribe((b) => {
      console.log(b);
      this.loadList();
    });
  }

  private loadList(): void {
    this.categoryClientService.getAll().subscribe((b) => (this.list = b));
  }
}
