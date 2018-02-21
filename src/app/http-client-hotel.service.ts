import { HotelService } from './hotel.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/throw';
import { catchError, map, tap } from 'rxjs/operators';

import { Hotel, Login, Movies, TVShows, Sitcom } from './hotel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpClientHotelService extends HotelService {

  constructor (private http: HttpClient) {
    super();
  }

  /** GET Hotels from the server */
  getHotels (): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelUrl)
      .pipe(
        tap(hotels => this.log(`fetched hotels`)),
        catchError(this.handleError)
      );
  }

    /** GET Hotels from the server */
    getHotelByName (term: string): Observable<Hotel[]> {
      const url = `${this.hotelUrl}/${term}`;
      console.log(url);
      return this.http
      .get(`api/hotels/?city=${term}`)
      .map((r: Response) => r.json().data as Hotel[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
    }

  // This get-by-id will 404 when id not found
  getHotel(id: number): Observable<Hotel> {
    const url = `${this.hotelUrl}/${id}`;
    console.log('gethotel', url);
    return this.http.get<Hotel>(url)
      .catch(this.handleError);
  }

  addHotel (name: string): Observable<Hotel> {
    const hotel = { name };

    return this.http.post<Hotel>(this.hotelUrl, hotel, httpOptions)
      .catch(this.handleError);
  }

  deleteHotel (hotel: Hotel | number): Observable<Hotel> {
    const id = typeof hotel === 'number' ? hotel : hotel.id;
    const url = `${this.hotelUrl}/${id}`;

    return this.http.delete<Hotel>(url, httpOptions)
      .catch(this.handleError);
  }

  updateHotel (hotel: Hotel): Observable<null> {
    return this.http.put(this.hotelUrl, hotel, httpOptions)
      .catch(this.handleError);
  }

  getLoginStatus(id: number): Observable<Login> {
    const url = `${this.hotelUrl}/${id}`;
    return this.http.get<Login>(url)
      .catch(this.handleError);
  }

  setLoginStatus (login: Login): Observable<Login> {
    return this.http.put(this.hotelUrl, login, httpOptions)
      .catch(this.handleError);
  }

  getMovies (): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.moviesUrl)
      .pipe(
        tap(movies => this.log(`fetched movies`)),
        catchError(this.handleError)
      );
  }

  getTVShows (): Observable<TVShows[]> {
    return this.http.get<TVShows[]>(this.tvshowsUrl)
      .pipe(
        tap(tvshows => this.log(`fetched tvshows`)),
        catchError(this.handleError)
      );
  }

  getSitcom (): Observable<Sitcom[]> {
    return this.http.get<Sitcom[]>(this.sitcomUrl)
      .pipe(
        tap(sitcom => this.log(`fetched Sitcom`)),
        catchError(this.handleError)
      );
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }

  private log(message: string) {
    console.log(message);
  }
}
