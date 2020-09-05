import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteData } from '../../../../../../../../models/dialog.model';
import { ItemVitaminComponent } from '../item-vitamin.component';

@Component({
  selector: 'aqn-delete-vitamin-dialog',
  templateUrl: './delete-vitamin-dialog.component.html',
})
export class DeleteMineralDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemVitaminComponent>,
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