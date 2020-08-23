import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../../../models/ingredient.model';
import { MatDialog } from '@angular/material/dialog';
import { RecipeClientService } from 'src/app/modules/application/services/recipe/recipe-client/recipe-client.service';

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

  deleteRecipe(): void {}

  private loadList(): void {
    this.recipeClientService.getAll().subscribe((b) => (this.list = b));
  }
}
