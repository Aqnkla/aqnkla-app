import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aqn-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss'],
})
export class RecipeSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  valueChange(event: any): void {
    console.log(event.srcElement.value);
  }
}
