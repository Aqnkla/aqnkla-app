import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../../models/menu.model';
@Component({
  selector: 'sorgo-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: [
    './item-menu.component.scss',
    './item-menu.component.color.scss'
  ]
})
export class ItemMenuComponent implements OnInit {
  @Input() menuItem: MenuItem;
  @Input() isSubItem: boolean;
  @Input() rootUrl: string;

  get itemUrl(): string {
    return this.isSubItem ? `${this.rootUrl}/${this.menuItem.link}` : this.menuItem.link;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
