import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Http } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { MyDatePickerModule } from 'mydatepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {RatingModule} from 'ngx-rating';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';


import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { SocialLoginModule } from 'angular4-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { HotelInMemDataService } from './hotel-in-mem-data.service';
import { HttpClientHotelService } from './http-client-hotel.service';
import { PaymentComponent } from './payment/payment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { QRCodeModule } from 'angular2-qrcode';
import { Ng2Webstorage } from 'ngx-webstorage';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FoodComponent } from './food/food.component';
import { InPremiseComponent } from './in-premise/in-premise.component';
import { TravelComponent } from './travel/travel.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PoststayComponent } from './poststay/poststay.component';
import { CameraComponent } from './camera/camera.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UserService } from './shared/services/user.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeListComponent } from './type-list/type-list.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductsService } from './shared/services/products.service';
import { CartService } from './shared/services/cart.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PackageCartComponent } from './package-cart/package-cart.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { MatChipsModule } from '@angular/material/chips';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { TravelFilterComponent } from './travel/travel-filter/travel-filter.component';
import { TravelDetailsComponent } from './travel/travel-details/travel-details.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('326260731439-f4sq27oa4r6u2bhjepk3k75f2vcapnqf.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('160516178035418')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SearchlistComponent,
    PaymentComponent,
    NotFoundComponent,
    DashboardComponent,
    EntertainmentComponent,
    FoodComponent,
    InPremiseComponent,
    TravelComponent,
    PromotionsComponent,
    PoststayComponent,
    CameraComponent,
    DiscountsComponent,
    TypeListComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ProductListComponent,
    PackageCartComponent,
    QrcodeComponent,
    TravelListComponent,
    TravelFilterComponent,
    TravelDetailsComponent,
  ],
  entryComponents: [
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    HttpModule,
    QRCodeModule,
    Ng2Webstorage,
    HttpClientModule,
    MatGridListModule,
    NguiAutoCompleteModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    MyDatePickerModule,
    MatStepperModule,
    MatDatepickerModule,
    RatingModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatCardModule,
    NoopAnimationsModule,
    MatExpansionModule,
    HttpClientInMemoryWebApiModule.forRoot(HotelInMemDataService),
    SocialLoginModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }, HttpClientHotelService ,
    UserService,
    CartService,
    ProductsService,
    Adal4Service,
    {
      provide: Adal4HTTPService,
      useFactory: Adal4HTTPService.factory,
      deps: [Http, Adal4Service]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
