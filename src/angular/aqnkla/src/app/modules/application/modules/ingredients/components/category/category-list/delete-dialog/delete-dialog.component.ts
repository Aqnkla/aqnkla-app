import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryListComponent } from '../category-list.component';
import { DialogDeleteData } from './../../../../models/dialog.model';

@Component({
  selector: 'aqn-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./../../../../styles/ingredient.style.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CategoryListComponent>,
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
