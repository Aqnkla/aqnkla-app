import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryDialogComponent } from './delete-dialog/delete-category-dialog.component';
import { CategoryClientService } from '../../../services/category-manage-client/category-manage-client.service';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';
import { IngredientCategoryModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-category.model';
@Component({
  selector: 'aqn-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: [
    './category-list.component.scss',
    './../../../styles/ingredient.style.scss',
  ],
})
export class CategoryListComponent implements OnInit {
  list: IngredientCategoryModel[] = [];
  displayedColumns: string[] = [
    'name',
    'description',
    'button-edit',
    'button-detail',
    'button-delete',
  ];
  constructor(
    private categoryClientService: CategoryClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadList();
  }

  deleteCategory(value: IngredientCategoryModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteCategoryDialogComponent, {
      width: '250px',
      data: {
        header: `Remove category ${value.name}`,
        message: `Do you want remove ${value.name}?`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.categoryClientService.delete(value.id).subscribe((b) => {
          self.loadList();
        });
      }
    });
  }
  private loadList(): void {
    this.categoryClientService.getAll().subscribe((b) => (this.list = b));
  }
}
