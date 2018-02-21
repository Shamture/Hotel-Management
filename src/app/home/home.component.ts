import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { LocalStorageService } from 'ngx-webstorage';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

export class City {
  constructor(public name: string) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private selectedDateCheckIn = '';
  private selectedDateCheckOut = '';
  roomvalue: number;
  cityCtrl: FormControl;
  filteredCities: Observable<any[]>;
  locationSelectedValue: string;

  cities: City[] = [
    {
      name: 'Chennai'
    },
    {
      name: 'Bangalore'
    },
    {
      name: 'Mumbai'
    },
    {
      name: 'Delhi'
    }
  ];

  constructor(private router: Router,
    private storage: LocalStorageService) {
    this.cityCtrl = new FormControl();
    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
      startWith(''),
      map(city => city ? this.filterCities(city) : this.cities.slice())
      );
  }

  filterCities(name: string) {
    return this.cities.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
  }

  searchResult() {
    console.log('button click');
    const link = ['/searchlist', this.locationSelectedValue];
    this.saveValue();
    this.router.navigate(link);
  }

  saveValue() {
    console.log('Room value >>>>', this.roomvalue);
    this.storage.store('roomvalue', this.roomvalue);
    console.log(this.storage.retrieve('roomvalue'));
  }

  addEvent1(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('onDateChanged(): ', event.value);
    this.storage.store('checkInDate', event.value);
  }

  addEvent2(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('onDateChanged(): ', event.value);
    this.storage.store('checkOutDate', event.value);
  }

}
