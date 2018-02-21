import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-package-cart',
  templateUrl: './package-cart.component.html',
  styleUrls: ['./package-cart.component.css']
})
export class PackageCartComponent implements OnInit {

  public packageCartItems$: Observable<any[]> = of([]);
  public packageCartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.packageCartItems$ = this
      .cartService
      .getItems();

    this.packageCartItems$.subscribe(_ => this.packageCartItems = _);
  }

  ngOnInit() {
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: any) {
    this.cartService.removeFromCart(item);
  }

}
