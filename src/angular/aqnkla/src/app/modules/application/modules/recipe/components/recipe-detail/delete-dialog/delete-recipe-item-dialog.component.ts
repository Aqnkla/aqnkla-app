import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';
import { RecipeDetailComponent } from '../recipe-detail.component';

@Component({
  selector: 'aqn-delete-category-dialog',
  templateUrl: './delete-recipe-item-dialog.component.html'
})
export class DeleteCategoryDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RecipeDetailComponent>,
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
