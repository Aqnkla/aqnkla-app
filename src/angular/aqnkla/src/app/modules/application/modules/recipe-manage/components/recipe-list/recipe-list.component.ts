import { RecipeClientService } from './../../services/recipe-manage-client/recipe-manage-client.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { RecipeModel } from 'src/app/modules/application/common-modules/food/models/recipe/recipe.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';

export class DeleteRecipeDialogComponent extends DialogDeleteComponent<
  RecipeListComponent
> {}

@Component({
  selector: 'aqn-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  list: RecipeModel[] = [];
  displayedColumns: string[] = [
    'name',
    'description',
    'button-edit',
    'button-detail',
    'button-delete',
  ];
  constructor(
    private recipeClientService: RecipeClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadList();
  }

  deleteRecipe(value: RecipeModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteRecipeDialogComponent, {
      width: '250px',
      data: {
        header: `Remove recipe ${value.name}`,
        message: `Do you want remove ${value.name}?`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.recipeClientService.delete(value.id).subscribe((b) => {
          self.loadList();
        });
      }
    });
  }

  private loadList(): void {
    this.recipeClientService.getAll().subscribe((b) => (this.list = b));
  }
}
