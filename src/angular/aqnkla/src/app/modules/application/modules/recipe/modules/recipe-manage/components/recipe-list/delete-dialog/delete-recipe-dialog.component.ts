import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipeListComponent } from '../recipe-list.component';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';

@Component({
  selector: 'aqn-delete-recipe-dialog',
  templateUrl: './delete-recipe-dialog.component.html'
})
export class DeleteRecipeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RecipeListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteData
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.data.delete = false;
    this.dialogRef.close(this.data);
  }

  confirm(): void {
    this.data.delete = true;
    this.dialogRef.close(this.data);
  }
}
