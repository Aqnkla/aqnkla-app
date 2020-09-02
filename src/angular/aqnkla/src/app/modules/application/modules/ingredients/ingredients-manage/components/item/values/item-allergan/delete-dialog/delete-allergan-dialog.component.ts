import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteData } from '../../../../../../../../models/dialog.model';
import { ItemAllerganComponent } from '../item-allergan.component';

@Component({
  selector: 'aqn-delete-allergan-dialog',
  templateUrl: './delete-allergan-dialog.component.html',
})
export class DeleteAllerganDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemAllerganComponent>,
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
