import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TravelFilter } from '../travel';

@Component({
  selector: 'app-travel-filter',
  templateUrl: './travel-filter.component.html',
  styleUrls: ['./travel-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelFilterComponent implements OnInit {

  @Input() availableFilters: TravelFilter[] = [];
  @Input() activatedFilters: TravelFilter[] = [];
  @Output() activeFilters: EventEmitter<TravelFilter[]> = new EventEmitter<TravelFilter[]>();

  constructor() {
  }

  ngOnInit() {
  }

  public filterActive(filter: TravelFilter): boolean {
    return this.activatedFilters.find(_ => _.type === filter.type) != null;
  }

  public changeFilterStatus(filter: TravelFilter) {
    console.log('change filter', filter);
    this.activeFilters.emit([filter]);
  }
}
