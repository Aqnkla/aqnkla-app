import { Component, OnInit, Input } from '@angular/core';
import { MenuGroup } from '../../../models/menu.model';

@Component({
  selector: 'aqn-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: [
    './group-menu.component.scss',
    './group-menu.component.color.scss']
})
export class GroupMenuComponent implements OnInit {
  private itemHeight = 20;
  @Input() set isExtended(value: boolean) {
    this.$isExtended = value;
    this.updateSumMenu();
  }
  get isExtended(): boolean {
    return this.$isExtended;
  }
  @Input() set gruop(value: MenuGroup) {
    this.$gruop = value;
    this.updateSumMenu();
  }
  get gruop(): MenuGroup {
    return this.$gruop;
  }
  private $gruop: MenuGroup;
  private $isExtended: boolean;

  subItemStyle = {
    height: `${this.itemHeight}px`
  };
  subMenuStyle = {};

  constructor() { }

  ngOnInit(): void {
  }

  private updateSumMenu(): void {
    this.subMenuStyle = {
      height: this.$isExtended ? `${this.itemHeight * this.$gruop.subItems.length + 15}px` : `0px`,
      transition: 'height 200ms ease-in-out'
    };
  }

}
