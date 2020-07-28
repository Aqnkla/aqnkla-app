import { MenuHelper } from './../../../helpers/menu/menu.helper';
import { Menu } from './../../../models/menu.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DisplayService } from '../../../services/display/display.service';

@Component({
  selector: 'sorgo-side',
  templateUrl: './side.component.html',
  styleUrls: [
    './side.component.scss',
    './side.component.color.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideComponent implements OnInit {
  isExtended: boolean;
  menu: Menu;
  isDarkModelEnabled: boolean;
  darkModeLabel: string;
  get year(): string {
    return (new Date()).getFullYear().toString();
  }

  constructor(private displayService: DisplayService) {
    this.menu = MenuHelper.getMenu();
    this.darkModeLabel = 'Night Mode';
    this.switchMenuSize(false);
  }

  ngOnInit(): void {
  }

  switchSize(): void {
    this.switchMenuSize(!this.isExtended);
  }

  switchDarkMode(value: MatSlideToggleChange): void {
    this.displayService.switchDarkMode();
  }

  private switchMenuSize(isExtended: boolean): void {
    this.isExtended = isExtended;
    const size = MenuHelper.getMenuSize(this.isExtended);
    this.displayService.changeMenuSize(size);
  }

}
