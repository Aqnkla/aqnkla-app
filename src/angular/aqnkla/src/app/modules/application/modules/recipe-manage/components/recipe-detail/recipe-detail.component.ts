import { RecipeViewModel } from 'src/app/models/api/aqnkla-food';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewType } from 'src/app/models/common.model';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { RecipeClientService } from '../../services/recipe-manage-client/recipe-manage-client.service';

@Component({
  selector: 'aqn-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  ViewType = ViewType;
  viewType: ViewType;
  item: RecipeViewModel;
  itemId: string;

  constructor(
    private recipeClientService: RecipeClientService,
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

  ngOnInit(): void {}

  private uploadDetails(): void {
    if (this.viewType) {
      switch (this.viewType) {
        case ViewType.add:
          this.item = {
            id: RandomHelper.uuidv4(),
            name: '',
            ingredients: [],
            prepareSteps: {
              steps: [],
              groups: [],
            },
          };
          break;
        case ViewType.edit:
        case ViewType.detail:
          if (this.itemId) {
            this.recipeClientService
              .get(this.itemId)
              .subscribe((b) => (this.item = b));
          }
          break;
      }
    }
  }

  save(): void {
    console.log('item save', this.item);
    switch (this.viewType) {
      case ViewType.add:
        this.recipeClientService.add(this.item).subscribe((b) =>
          this.router.navigate(['list'], {
            relativeTo: this.route.parent,
          })
        );
        break;
      case ViewType.edit:
        this.recipeClientService
          .update(this.item.id, this.item)
          .subscribe((b) =>
            this.router.navigate(['list'], {
              relativeTo: this.route.parent,
            })
          );
        break;
    }
  }

  cancel(): void {
    this.router.navigate(['list'], { relativeTo: this.route.parent });
  }
}
