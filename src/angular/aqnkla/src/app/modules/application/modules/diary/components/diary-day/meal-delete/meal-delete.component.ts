import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiaryDayComponent } from '../diary-day.component';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';

@Component({
  selector: 'aqn-meal-delete',
  templateUrl: './meal-delete.component.html'
})
export class MealDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DiaryDayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteData) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.data.delete = false;
    this.dialogRef.close(this.data);
  }

  confirm(): void {
    this.data.delete = true;
    this.dialogRef.close(this.data);
  }
}
