import { Component, OnInit } from '@angular/core';
import { ViewType } from 'src/app/models/common.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { CategoryClientService } from '../../../services/category-manage-client/category-manage-client.service';
import { ItemClientService } from '../../../services/item-manage-client/item-manage-client.service';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-item.model';
import { IngredientCategoryModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-category.model';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { Vitamin } from 'src/app/modules/application/common-modules/food/models/ingredient/parameters/vitamin.model';
import { Mineral } from 'src/app/modules/application/common-modules/food/models/ingredient/parameters/mineral.model';
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
  item: IngredientItemModel;
  itemId: string;
  categories: IngredientCategoryModel[] = [];
  vitamins: ItemData<Vitamin>[];
  minerals: ItemData<Mineral>[];

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
            carbs: 0,
            fat: 0,
            protein: 0,
            fiber: 0,
            minerals: [],
            vitamins: [],
            allergens: [],
            averageDensity: null,
            isPieceAllowed: false,
            isVolumeAllowed: false,
            pieceAvgWeight: null,
            isVolumeDefault: false,
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
