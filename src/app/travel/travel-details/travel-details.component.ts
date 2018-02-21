import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from '../travel';
import { ProductsService } from '../../shared/services/products.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  public travel: Travel = {};

  constructor(private route: ActivatedRoute
    , private router: Router
    , private productsService: ProductsService
    , private cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService
        .getTourism(id)
        .subscribe(_ => this.travel = _);
    });
  }

  public addToCart(t: Travel) {
    this.cartService.addToCart(t);
    this.router.navigateByUrl('/');
  }
}
