import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClientHotelService } from '../http-client-hotel.service';
import { Hotel } from '../hotel';
import { PaymentComponent } from '../payment/payment.component';
import { RatingModule, Rating } from 'ngx-rating';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit {
  hotels: Hotel[];
  starsCount = 3;
  private sub: Subscription;

  constructor(private hotelService: HttpClientHotelService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        const search = params['city'];
        this.getHotelByName(search);
      }
    );
  }

  openPayment(hotel) {
    this.router.navigate(['/payments', hotel.id]);
  }

  getHotelByName(text: string): void {
    this.hotelService.getHotels()
    .subscribe(hotels => this.hotels = hotels);
    console.log('Hotels', this.hotels);
  }

}
