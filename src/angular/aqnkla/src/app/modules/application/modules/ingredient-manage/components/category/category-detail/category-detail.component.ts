import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewType } from 'src/app/models/common.model';
import { CategoryClientService } from '../../../services/category-manage-client/category-manage-client.service';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { IngredientCategoryModel } from 'src/app/modules/application/common-modules/food/models/ingredient-category.model';
@Component({
  selector: 'aqn-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  ViewType = ViewType;
  viewType: ViewType;
  category: IngredientCategoryModel;
  categoryId: string;
  constructor(
    private categoryClientService: CategoryClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.data.subscribe((b) => {
      this.viewType = b.viewType;
      this.uploadDetails();
    });
    this.route.params.subscribe((b) => {
      this.categoryId = b.id;
      this.uploadDetails();
    });
  }

  ngOnInit(): void {
  }

  private uploadDetails(): void {
    if (this.viewType) {
      switch (this.viewType) {
        case ViewType.add:
          this.category = {
            id: RandomHelper.uuidv4(),
            name: '',
            description: '',
            parentCategoryId: '',
          };
          break;
        case ViewType.edit:
        case ViewType.detail:
          if (this.categoryId) {
            this.categoryClientService
              .get(this.categoryId)
              .subscribe((b) => (this.category = b));
          }
          break;
      }
    }
  }

  save(): void {
    switch (this.viewType) {
      case ViewType.add:
        this.categoryClientService.add(this.category).subscribe((b) =>
          this.router.navigate(['category-list'], {
            relativeTo: this.route.parent,
          })
        );
        break;
      case ViewType.edit:
        this.categoryClientService
          .update(this.category.id, this.category)
          .subscribe((b) =>
            this.router.navigate(['category-list'], {
              relativeTo: this.route.parent,
            })
          );
        break;
    }
  }

  cancel(): void {
    this.router.navigate(['category-list'], { relativeTo: this.route.parent });
  }
}
