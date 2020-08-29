import { Component, OnInit } from '@angular/core';
import { DateHelper } from './../../helpers/date.helper';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aqn-diary-day',
  templateUrl: './diary-day.component.html',
  styleUrls: ['./diary-day.component.scss'],
})
export class DiaryDayComponent implements OnInit {
  currentDay: Date;
  get currentDayString(): string {
    return DateHelper.getDateString(this.currentDay);
  }
  get previousDayString(): string {
    return DateHelper.getDateString(DateHelper.addDays(this.currentDay, -1));
  }
  get nextDayString(): string {
    return DateHelper.getDateString(DateHelper.addDays(this.currentDay, 1));
  }
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.date) {
        this.currentDay = DateHelper.getDate(params.date);
      } else {
        this.currentDay = new Date();
      }
      console.log(params);
    });
  }

  ngOnInit(): void {}
}
