import { RecipeSearchService } from './../../services/recipe-search/recipe-search.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  startWith,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { MatOptionSelectionChange } from '@angular/material/core';
import { RecipeViewModel } from 'src/app/models/api/aqnkla-food';

@Component({
  selector: 'aqn-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss'],
})
export class RecipeSearchComponent implements OnInit {
  @Output() recipeChange = new EventEmitter<RecipeViewModel>();
  searchForm = new FormControl();
  filteredRecipes: Observable<RecipeViewModel[]>;
  constructor(private recipeSearchService: RecipeSearchService) {}

  ngOnInit(): void {
    this.filteredRecipes = this.searchForm.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((val) => {
        return this.filter(val || '');
      })
    );
  }

  valueChange(event: MatOptionSelectionChange): void {
    this.recipeChange.emit(event.source.value);
  }

  getOptionText(option: RecipeViewModel): string {
    if (option) {
      return option.name;
    }
    return '';
  }

  private filter(value: string): Observable<RecipeViewModel[]> {
    return this.recipeSearchService.getByName(value);
  }
}
