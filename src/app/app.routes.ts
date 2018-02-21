import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { PaymentComponent } from './payment/payment.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FoodComponent } from './food/food.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PackageCartComponent } from './package-cart/package-cart.component';
import { TravelComponent } from './travel/travel.component';
import { TravelDetailsComponent } from './travel/travel-details/travel-details.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'searchlist/:city', component: SearchlistComponent },
    { path: 'payments/:id', component: PaymentComponent },
    { path: 'entertainment', component: EntertainmentComponent },
    { path: 'food', component: FoodComponent },
    { path: 'products', component: ProductComponent },
    { path: 'details/:id', component: ProductDetailsComponent },
    { path: 'cart', component: PackageCartComponent },
    { path: 'travel', component: TravelComponent },
    { path: 'travels/:id', component: TravelDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
