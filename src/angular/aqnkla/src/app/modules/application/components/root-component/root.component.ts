import { DisplayService } from './../../services/display/display.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aqn-root',
  templateUrl: './root.component.html',
  styleUrls: [
    './root.component.scss',
    './root.component.color.scss']
})
export class RootComponent implements OnInit {
  sideStyle = {
    width: '10px',
    transition: 'height 200ms ease-in-out'
  };

  rootStyle = {
    left: '10px',
    transition: 'left 200ms ease-in-out'
  };
  private $messageHandlers: Subscription[] = [];
  isDarkMode: boolean;

  constructor(private displayService: DisplayService) {
    this.$messageHandlers.push(this.displayService.darkModeChange.subscribe(b => this.isDarkMode = b));
    this.$messageHandlers.push(this.displayService.menuSizeChange.subscribe(b => this.changeMenuSize(b)));
  }

  ngOnInit(): void {
    this.isDarkMode = false;
  }

  private changeMenuSize(size: number): void {
    this.rootStyle.left = `${size}px`;
    this.sideStyle.width = `${size}px`;
  }
}
