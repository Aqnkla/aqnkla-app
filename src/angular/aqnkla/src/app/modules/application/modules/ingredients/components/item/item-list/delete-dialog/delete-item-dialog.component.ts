import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemListComponent } from '../item-list.component';
import { DialogDeleteData } from '../../../../models/dialog.model';

@Component({
  selector: 'aqn-delete-item-dialog',
  templateUrl: './delete-item-dialog.component.html',
  styleUrls: ['./../../../../styles/ingredient.style.scss'],
})
export class DeleteItemDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemListComponent>,
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
