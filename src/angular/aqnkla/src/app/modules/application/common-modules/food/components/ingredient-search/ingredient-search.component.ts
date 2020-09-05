import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientSearchService } from '../../services/ingredient-search/ingredient-search.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatOptionSelectionChange } from '@angular/material/core';
import { IngredientItemModel } from '../../models/ingredient/ingredient-item.model';

@Component({
  selector: 'aqn-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss'],
})
export class IngredientSearchComponent implements OnInit {
  @Output() ingredientChange = new EventEmitter<IngredientItemModel>();
  searchForm = new FormControl();
  filteredIngredients: Observable<IngredientItemModel[]>;
  constructor(private ingredientSearchService: IngredientSearchService) {}

  ngOnInit(): void {
    this.filteredIngredients = this.searchForm.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((val) => {
        return this.filter(val || '');
      })
    );
  }

  valueChange(event: MatOptionSelectionChange): void {
    this.ingredientChange.emit(event.source.value);
  }

  getOptionText(option: IngredientItemModel): string {
    if (option) {
      return option.name;
    }
    return '';
  }

  private filter(value: string): Observable<IngredientItemModel[]> {
    return this.ingredientSearchService.getByName(value);
  }
}
