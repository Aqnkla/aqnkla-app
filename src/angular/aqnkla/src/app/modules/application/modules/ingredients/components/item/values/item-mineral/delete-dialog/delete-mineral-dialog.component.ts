import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemMineralComponent } from '../item-mineral.component';
import { DialogDeleteData } from '../../../../../models/dialog.model';

@Component({
  selector: 'aqn-delete-mineral-dialog',
  templateUrl: './delete-mineral-dialog.component.html',
})
export class DeleteMineralDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemMineralComponent>,
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
