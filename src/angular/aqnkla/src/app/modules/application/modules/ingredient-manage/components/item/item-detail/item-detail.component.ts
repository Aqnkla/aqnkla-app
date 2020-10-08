import { Component, OnInit } from '@angular/core';
import { ViewType } from 'src/app/models/common.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { CategoryClientService } from '../../../services/category-manage-client/category-manage-client.service';
import { ItemClientService } from '../../../services/item-manage-client/item-manage-client.service';
import {
  IngredientCategoryViewModel,
  IngredientItemViewModel,
  MineralViewModel,
  VitaminViewModel,
} from 'src/app/models/api/aqnkla-food';
@Component({
  selector: 'aqn-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: [
    './item-detail.component.scss',
    './../../../styles/ingredient.style.scss',
  ],
})
export class ItemDetailComponent implements OnInit {
  ViewType = ViewType;
  viewType: ViewType;
  item: IngredientItemViewModel;
  itemId: string;
  categories: IngredientCategoryViewModel[] = [];
  vitamins: VitaminViewModel[];
  minerals: MineralViewModel[];

  constructor(
    private itemClientService: ItemClientService,
    private categoryClientService: CategoryClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.data.subscribe((b) => {
      this.viewType = b.viewType;
      this.uploadDetails();
    });
    this.route.params.subscribe((b) => {
      this.itemId = b.id;
      this.uploadDetails();
    });
  }

  ngOnInit(): void {
    this.categoryClientService.getAll().subscribe((b) => (this.categories = b));
  }

  private uploadDetails(): void {
    if (this.viewType) {
      switch (this.viewType) {
        case ViewType.add:
          this.item = {
            id: RandomHelper.uuidv4(),
            name: '',
            description: '',
            categoryId: '',
            calories: 0,
            carbsTotal: 0,
            fatTotal: 0,
            protein: 0,
            fiber: 0,
            minerals: [],
            vitamins: [],
            allergens: [],
            volumeAverageDensity: null,
            isQuantityAllowed: false,
            isVolumeAllowed: false,
            quantityAvgWeights: null,
            isVolumeDefault: false,
            aminoAcids: [],
            carbohydrates: [],
            cholesterol: [],
            fats: [],
          };
          break;
        case ViewType.edit:
        case ViewType.detail:
          if (this.itemId) {
            this.itemClientService
              .get(this.itemId)
              .subscribe((b) => (this.item = b));
          }
          break;
      }
    }
  }

  save(): void {
    switch (this.viewType) {
      case ViewType.add:
        this.itemClientService.add(this.item).subscribe((b) =>
          this.router.navigate(['item-list'], {
            relativeTo: this.route.parent,
          })
        );
        break;
      case ViewType.edit:
        this.itemClientService.update(this.item.id, this.item).subscribe((b) =>
          this.router.navigate(['item-list'], {
            relativeTo: this.route.parent,
          })
        );
        break;
    }
  }

  cancel(): void {
    this.router.navigate(['item-list'], { relativeTo: this.route.parent });
  }
}
