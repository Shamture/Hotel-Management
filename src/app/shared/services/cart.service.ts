import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {Subscriber} from 'rxjs/Subscriber';
import {of} from 'rxjs/observable/of';
import { Product } from '../../food/product';

@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private itemsInCart: any[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: any) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public removeFromCart(item: any) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getItems(): Observable<any[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.map((items: any[]) => {
      return items.reduce((prev, curr: any) => {
        return prev + curr.price;
      }, 0);
    });
  }
}
