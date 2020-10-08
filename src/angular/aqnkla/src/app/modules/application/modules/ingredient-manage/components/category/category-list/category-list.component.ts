import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryClientService } from '../../../services/category-manage-client/category-manage-client.service';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { IngredientCategoryViewModel } from 'src/app/models/api/aqnkla-food';

export class DeleteCategoryDialogComponent extends DialogDeleteComponent<
  CategoryListComponent
> {}

@Component({
  selector: 'aqn-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: [
    './category-list.component.scss',
    './../../../styles/ingredient.style.scss',
  ],
})
export class CategoryListComponent implements OnInit {
  list: IngredientCategoryViewModel[] = [];
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

  deleteCategory(value: IngredientCategoryViewModel): void {
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
      if (result && result.delete) {
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
