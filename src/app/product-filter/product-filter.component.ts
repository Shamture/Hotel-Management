import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductFilter } from '../food/product';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFilterComponent implements OnInit {

  @Input() availableFilters: ProductFilter[] = [];
  @Input() activatedFilters: ProductFilter[] = [];
  @Output() activeFilters: EventEmitter<ProductFilter[]> = new EventEmitter<ProductFilter[]>();

  constructor() {
  }

  ngOnInit() {
  }

  public filterActive(filter: ProductFilter): boolean {
    return this.activatedFilters.find(_ => _.type === filter.type) != null;
  }

  public changeFilterStatus(filter: ProductFilter) {
    console.log('change filter', filter);
    this.activeFilters.emit([filter]);
  }
}

