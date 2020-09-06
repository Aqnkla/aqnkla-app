import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';
import { StepSummaryComponent } from '../step-summary.component';

@Component({
  selector: 'aqn-step-recipe-dialog',
  templateUrl: './delete-step-dialog.component.html'
})
export class DeleteStepDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<StepSummaryComponent>,
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
