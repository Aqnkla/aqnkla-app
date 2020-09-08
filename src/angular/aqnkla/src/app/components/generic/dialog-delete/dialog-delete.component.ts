import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteData } from 'src/app/models/dialog.model';

@Component({
  selector: 'aqn-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
})
export class DialogDeleteComponent<SourceComponent> {
  constructor(
    public dialogRef: MatDialogRef<SourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteData
  ) {}

  cancel(): void {
    this.data.delete = false;
    this.dialogRef.close(this.data);
  }

  confirm(): void {
    this.data.delete = true;
    this.dialogRef.close(this.data);
  }
}
