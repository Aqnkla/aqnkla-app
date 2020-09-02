import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemDialogComponent } from './delete-dialog/delete-item-dialog.component';
import { IngredientItemModel, IngredientCategoryModel } from '../../../../../models/ingredient.model';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';

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

  deleteItem(value: IngredientItemModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteItemDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.name}`,
        message: `Do you want remove ${value.name}?`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.itemClientService.delete(value.id).subscribe((b) => {
          self.loadList();
        });
      }
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
