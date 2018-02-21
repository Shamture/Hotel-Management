import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product, ProductFilter } from '../food/product';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  @Input() public items: Product[] = [];

  public readonly filters: ProductFilter[] = [
    <ProductFilter>{type: 'Chinese'},
    <ProductFilter>{type: 'South Indian'},
    <ProductFilter>{type: 'North Indian'},
  ];

  public activeFilters: ProductFilter[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public itemsAfterFilter(): Product[] {
    return this.items.filter((item: Product) => {
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

  public updateActivatedFilters(filters: ProductFilter[]) {
    console.log('updateActivatedFilters', filters);
    this.activeFilters = filters;
  }
}
