import { Component, OnInit } from '@angular/core';
import { ItemClientService } from '../../../../../services/ingredient/item-client/item-client.service';
import { ViewType } from 'src/app/models/common.model';
import { ObjectHelper } from './../../../../../helpers/common/object.helper';
import {
  IngredientItemModel,
  IngredientCategoryModel,
  Vitamin,
  ItemData,
  Mineral,
} from '../../../../../models/ingredient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { CategoryClientService } from '../../../../../services/ingredient/category-client/category-client.service';

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
            allergans: [],
            avrageDensity: null,
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
