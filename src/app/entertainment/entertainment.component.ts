import { Component, OnInit } from '@angular/core';
import { HttpClientHotelService } from '../http-client-hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Movies, TVShows, Sitcom } from '../hotel';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  private sub: Subscription;
  movies: Movies[];
  tvshows: TVShows[];
  sitcom: Sitcom[];

  constructor(private hotelService: HttpClientHotelService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.getMovies();
      }
    );
    this.sub = this.route.params.subscribe(
      params => {
        this.getTvShows();
      }
    );
    this.sub = this.route.params.subscribe(
      params => {
        this.getSitcom();
      }
    );
  }

  getMovies(): void {
    this.hotelService.getMovies()
    .subscribe(movies => this.movies = movies);
    console.log('movies>>>>', this.movies);
  }

  getTvShows(): void {
    this.hotelService.getTVShows()
    .subscribe(tvshows => this.tvshows = tvshows);
    console.log('tvshows>>>>', this.tvshows);
  }

  getSitcom(): void {
    this.hotelService.getSitcom()
    .subscribe(sitcom => this.sitcom = sitcom);
    console.log('sitcom>>>>', this.sitcom);
  }

}
