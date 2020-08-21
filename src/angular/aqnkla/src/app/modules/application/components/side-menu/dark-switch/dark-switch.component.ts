import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aqn-dark-switch',
  templateUrl: './dark-switch.component.html',
  styleUrls: ['./dark-switch.component.scss'],
})
export class DarkSwitchComponent implements OnInit {
  isDarkActive: boolean;
  constructor() {}

  ngOnInit(): void {}

  switchMode(): void {
    this.isDarkActive = !this.isDarkActive;
  }
}
