import { Component, OnInit } from '@angular/core';
import { HttpClientHotelService } from '../http-client-hotel.service';
import { Login } from '../hotel';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'angular4-social-login';
import { Observable } from 'rxjs/Observable';
import { Product } from '../food/product';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login: Login;
  isAdmin: boolean;
  isLoggedIn: boolean;
  public shoppingCartItems$: Observable<Product[]>;

  constructor(private storage: LocalStorageService,
    private user: UserService,
    private router: Router,
    private auth: AuthService,

    private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => _);
  }

  ngOnInit() {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.isAdmin = this.storage.retrieve('isAdmin');
    this.isLoggedIn = this.storage.retrieve('isLoggedIn');
  }

  /**
   * Logout
   */
  logout() {
    if (this.isAdmin) {
      this.storage.clear('isAdmin');
      this.storage.store('isAdmin', false);
      this.user.setUserLoggedIn(false, 'null');
    }

    if (this.isLoggedIn) {
      this.storage.clear('isLoggedIn');
      this.user.setUserLoggedIn(false, null);
      this.storage.store('isLoggedIn', false);
    }
    this.auth.signOut();
    this.user.setUserLoggedIn(false, null);
    this.router.navigate(['/home']);
  }

  cart() {
    console.log('clicked cart');
    this.router.navigate(['/cart']);
  }

}
