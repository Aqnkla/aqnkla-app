import { Component, OnInit, Input } from '@angular/core';
import { IngredientCategoryModel } from './../../models/ingredient.model';
import { RandomHelper } from './../../../../helpers/common/random.helper';
import { IngridientClientService } from './../../services/ingridient-client/ingridient-client.service';

@Component({
  selector: 'aqn-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  @Input() id: string;
  category: IngredientCategoryModel;
  constructor(private ingridientClientService: IngridientClientService) {}

  ngOnInit(): void {
    this.category = {
      id: RandomHelper.uuidv4(),
      name: '',
      description: '',
    };
  }

  save(): void {
    console.log('save', this.category);
    this.ingridientClientService
      .addCategory(this.category)
      .subscribe((b) => console.log('add', b));
  }

  cancel(): void {
    console.log('cancel');
  }
}
