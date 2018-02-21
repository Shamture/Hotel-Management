/*eslint no-debugger: "error"*/

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Travel, TravelFilter } from '../travel';
import { debug } from 'util';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  @Input() public items: Travel[] = [];

  public readonly filters: TravelFilter[] = [
    <TravelFilter>{type: '5KM'},
    <TravelFilter>{type: '30KM'},
    <TravelFilter>{type: '60KM'},
  ];

  public activeFilters: TravelFilter[] = [];

  constructor() {
  }

  ngOnInit() {

  }

  public itemsAfterFilter(): Travel[] {
    return this.items.filter((item: Travel) => {
      const matchesActiveFilter: boolean = this.activeFilters.reduce((prev, curr) => {
        if (item.type.includes(curr.type)) {
          return prev && true;
        } else {
          return false;
        }
      }, true);

      return matchesActiveFilter;
    });
  }

  public updateActivatedFilters(filters: TravelFilter[]) {
    console.log('updateActivatedFilters', filters);
    this.activeFilters = filters;
  }
}
