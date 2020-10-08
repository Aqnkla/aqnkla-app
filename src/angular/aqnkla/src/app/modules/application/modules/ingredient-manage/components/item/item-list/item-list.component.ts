import { ItemClientService } from './../../../services/item-manage-client/item-manage-client.service';
import { CategoryClientService } from './../../../services/category-manage-client/category-manage-client.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { IngredientCategoryViewModel, IngredientItemViewModel } from 'src/app/models/api/aqnkla-food';

export class DeleteItemDialogComponent extends DialogDeleteComponent<
  ItemListComponent
> {}

@Component({
  selector: 'aqn-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: [
    './item-list.component.scss',
    './../../../styles/ingredient.style.scss',
  ],
})
export class ItemListComponent implements OnInit {
  list: IngredientItemViewModel[] = [];
  displayedColumns: string[] = [
    'category',
    'name',
    'description',
    'button-edit',
    'button-detail',
    'button-delete',
  ];
  categories: IngredientCategoryViewModel[] = [];
  constructor(
    private itemClientService: ItemClientService,
    private categoryClientService: CategoryClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadList();
    this.categoryClientService.getAll().subscribe((b) => (this.categories = b));
  }

  deleteItem(value: IngredientItemViewModel): void {
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
      if (result && result.delete) {
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
