import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { ProductsService } from '../shared/services/products.service';
import { Travel } from './travel';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  public travels: Travel[] = [];

  constructor(private productsServices: ProductsService
    , private cartService: CartService) {
    productsServices.getTourisms()
      .subscribe(_ => this.travels = _);

    this.cartService
      .getItems()
      .subscribe((items: Travel[]) => {
      // remove items that are in our cart
        const allItems = this.travels;
        this.travels = allItems.filter(_ => {
          return !this.itemIsInCart(_, items);
        });
      });
  }

  ngOnInit() {
  }

  private itemIsInCart(item: any, cart: any[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
}
