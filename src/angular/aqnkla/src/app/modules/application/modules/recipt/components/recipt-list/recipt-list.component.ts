import { Component, OnInit } from '@angular/core';
import { ReciptClientService } from './../../services/recipt-client/recipt-client.service';
import { ReciptModel } from '../../../ingredients/models/ingredient.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'aqn-recipt-list',
  templateUrl: './recipt-list.component.html',
  styleUrls: ['./recipt-list.component.scss'],
})
export class ReciptListComponent implements OnInit {
  list: ReciptModel[] = [];
  displayedColumns: string[] = [
    'name',
    'description',
    'button-edit',
    'button-detail',
    'button-delete',
  ];
  constructor(
    private reciptClientService: ReciptClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadList();
  }

  deleteRecipt(): void {}

  private loadList(): void {
    this.reciptClientService.getAll().subscribe((b) => (this.list = b));
  }
}
