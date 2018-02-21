import { Hotel, Login, Movies, TVShows, Sitcom } from './hotel';
import { Observable } from 'rxjs/Observable';

export abstract class HotelService {
    hotelUrl = 'api/hotels';  // URL to web api
    moviesUrl = 'api/movies';  // URL to web api
    tvshowsUrl = 'api/tvshows';  // URL to web api
    sitcomUrl = 'api/sitcom';  // URL to web api


    abstract getHotels (): Observable<Hotel[]>;
    abstract getHotel(id: number): Observable<Hotel>;
    abstract addHotel (name: string): Observable<Hotel>;
    abstract deleteHotel (hotel: Hotel | number): Observable<Hotel>;
    abstract updateHotel (hotel: Hotel): Observable<Hotel>;
    abstract getLoginStatus(id: number): Observable<Login>;
    abstract setLoginStatus(login: Login): Observable<Login>;
    abstract getMovies (): Observable<Movies[]>;
    abstract getTVShows (): Observable<TVShows[]>;
    abstract getSitcom (): Observable<Sitcom[]>;
}
