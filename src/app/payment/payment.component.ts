import { Component, OnInit, OnDestroy } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClientHotelService } from '../http-client-hotel.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from '../hotel';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {

  checkInDate;
  checkOutDate;
  private sub: Subscription;
  hotel: Hotel = {
    id: 0,
    city: '',
    roomImg: '',
    hotelName: '',
    hotelAddress: '',
    hotelStatus: false,
    hotelRating: 0,
    hotelOffer: 0,
    offerAmount: 0,
    amount: 0
  };
  errorMessage: string;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private storage: LocalStorageService,
    private hotelService: HttpClientHotelService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
   this.retrieveValue();
   this.sub = this.route.params.subscribe(
    params => {
      const id = +params['id'];
      this.getHotel(id);
    });

   this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  retrieveValue() {
    this.checkInDate = this.storage.retrieve('checkInDate');
    this.checkOutDate = this.storage.retrieve('checkOutDate');
    console.log('retrieveValue', this.checkOutDate);
  }

    /**
   * Get Hotel
   * @param id
   */
  getHotel(id: number) {
    console.log('gethotel', id);
    this.hotelService.getHotel(id).subscribe(
      hotel => this.hotel = hotel,
      error => this.errorMessage = <any>error);
  }

  payment() {
    this.snackBar.open('Payment succesfully ', 'Thanks!!!', {
      duration: 2000,
    });
    this.router.navigate(['']);
  }

}
