import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../food/product';
import { Travel } from '../../travel/travel';
@Injectable()
export class ProductsService {

  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getTourisms(): Observable<Travel[]> {
    return this.tourism();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .map(_ => {
        return _.find((item: Product) => {
          return item.id === id;
        });
      });
  }

  public getTourism(id: number): Observable<Travel> {
    return this
      .tourism()
      .map(_ => {
        return _.find((item: Travel) => {
          return item.id === id;
        });
      });
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'Gramin', price: 1200, type: ['North Indian'],
      picture: 'assets/images/south_indian_3.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg'},
      <Product>{id: 2, picture: 'assets/images/south_indian_1.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Pindi Bangalore', price: 300, type: ['Chinese', 'South Indian']},
      <Product>{id: 3, picture: 'assets/images/chinese_1.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Sultans of Spice', price: 350, type: ['South Indian']},
      <Product>{id: 4, picture: 'assets/images/south_indian_2.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Kapoor Cafe', price: 400, type: ['North Indian', 'South Indian']},
      <Product>{id: 5, picture: 'assets/images/south_indian_3.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'The Punjabi Rasoi', price: 700, type: ['Desserts', 'North Indian']},
      <Product>{id: 6, picture: 'assets/images/chinese_2.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Pind Balluchi', price: 1000, type: ['Desserts', 'North Indian']},
      <Product>{id: 7, picture: 'assets/images/chinese_3.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Punjab Grill', price: 1200, type: ['Chinese']},
      <Product>{id: 8, picture: 'assets/images/south_indian_1.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Zero Mile Punjab', price: 275, type: ['North Indian']},
      <Product>{id: 9, picture: 'assets/images/chinese_1.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Bhojohori Manna', price: 480, type: ['Chinese', 'North Indian', 'Desserts']},
    ]);
  }

  private tourism(): Observable<Travel[]> {
    return of(<Travel[]>[
      <Travel>{id: 1, name: 'Lal Bagh', price: 1200, type: ['5KM'],
      picture: 'assets/images/tour1.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg'},
      <Travel>{id: 2, picture: 'assets/images/tour1.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Wonderla', price: 300, type: ['60KM', '30KM']},
      <Travel>{id: 3, picture: 'assets/images/tour1.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
      name: 'Cubbon Park', price: 350, type: ['60KM']},
    ]);
  }
}
