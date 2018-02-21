import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product, ProductFilter } from './product';
import { CartService } from '../shared/services/cart.service';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodComponent implements OnInit {

  public items: Product[] = [];

  constructor(private productsServices: ProductsService
    , private cartService: CartService) {
    productsServices.getProducts()
      .subscribe(_ => this.items = _);

    this.cartService
      .getItems()
      .subscribe((items: Product[]) => {
      // remove items that are in our cart
        const allItems = this.items;
        this.items = allItems.filter(_ => {
          return !this.itemIsInCart(_, items);
        });
      });
  }

  ngOnInit() {
  }

  private itemIsInCart(item: Product, cart: Product[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
}
