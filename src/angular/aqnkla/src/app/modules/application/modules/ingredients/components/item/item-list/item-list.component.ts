import { Component, OnInit } from '@angular/core';
import { ItemClientService } from './../../../services/item-client/item-client.service';
import {
  IngredientItemModel,
  IngredientCategoryModel,
} from '../../../models/ingredient.model';
import { CategoryClientService } from '../../../services/category-client/category-client.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'aqn-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: [
    './item-list.component.scss',
    './../../../styles/ingredient.style.scss',
  ],
})
export class ItemListComponent implements OnInit {
  list: IngredientItemModel[] = [];
  displayedColumns: string[] = [
    'category',
    'name',
    'description',
    'button-edit',
    'button-detail',
    'button-delete',
  ];
  categories: IngredientCategoryModel[] = [];
  constructor(
    private itemClientService: ItemClientService,
    private categoryClientService: CategoryClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadList();
    this.categoryClientService.getAll().subscribe((b) => (this.categories = b));
  }
  deleteItem(id: string): void {
    this.itemClientService.delete(id).subscribe((b) => {
      console.log(b);
      this.loadList();
    });
  }

  private loadList(): void {
    this.itemClientService.getAll().subscribe((b) => (this.list = b));
  }

  getCategoryName(categoryId: string): string {
    const cat = this.categories.filter((b) => b.id === categoryId);
    if (cat !== undefined && cat.length > 0) {
      return cat[0].name;
    }
  }
}
