import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { Adal4Service } from 'adal-angular4';
import { HttpClientHotelService } from '../http-client-hotel.service';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { LocalStorageService } from 'ngx-webstorage';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Login } from './login.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialUser: SocialUser;
  public login: Login;

  constructor(private auth: AuthService,
    private service: Adal4Service,
    private storage: LocalStorageService,
    public snackBar: MatSnackBar,
    private user: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
    };

    this.auth.authState.subscribe((user) => {
      this.socialUser = user;
      if (this.socialUser != null) {
        this.user.setUserLoggedIn(true, this.socialUser.name);
        this.router.navigateByUrl('');
      }
    });
  }

  signInWithGoogle(): void {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logIn(): void {
    this.service.login();
    this.user.setUserLoggedIn(true, '');
    this.router.navigateByUrl('');
  }

}
