import { Component, OnInit } from '@angular/core';
import { IngredientCategoryModel } from './../../models/ingredient.model';
import { RandomHelper } from './../../../../helpers/common/random.helper';

@Component({
  selector: 'aqn-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss'],
})
export class CategoryAddComponent implements OnInit {
  category: IngredientCategoryModel;
  constructor() {}

  ngOnInit(): void {
    this.category = {
      id: RandomHelper.uuidv4(),
      name: '',
      description: '',
    };
  }

  save(): void {
    console.log('save', this.category);
  }

  cancel(){

  }
}
