import { RecipeSearchService } from './../../services/recipe-search/recipe-search.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'aqn-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss'],
})
export class RecipeSearchComponent implements OnInit {
  @Output() recipeChange = new EventEmitter<RecipeModel>();
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor(private recipeSearchService: RecipeSearchService) {}

  ngOnInit(): void {
    console.log('RecipeSearchComponent');
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  valueChange(event: any): void {
    console.log(event.srcElement.value);
  }



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
