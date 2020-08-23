import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewType } from 'src/app/models/common.model';
import { ReciptModel } from '../../../ingredients/models/ingredient.model';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { ReciptClientService } from '../../services/recipt-client/recipt-client.service';

@Component({
  selector: 'aqn-recipt-detail',
  templateUrl: './recipt-detail.component.html',
  styleUrls: ['./recipt-detail.component.scss'],
})
export class ReciptDetailComponent implements OnInit {
  ViewType = ViewType;
  viewType: ViewType;
  item: ReciptModel;
  itemId: string;

  constructor(
    private reciptClientService: ReciptClientService,
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
          };
          break;
        case ViewType.edit:
        case ViewType.detail:
          if (this.itemId) {
            this.reciptClientService
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
        this.reciptClientService.add(this.item).subscribe((b) =>
          this.router.navigate(['list'], {
            relativeTo: this.route.parent,
          })
        );
        break;
      case ViewType.edit:
        this.reciptClientService
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
