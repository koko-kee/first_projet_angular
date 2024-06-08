import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { NavBarComponent } from './shared/layouts/nav-bar/nav-bar.component';
import { SliderComponent } from './shared/layouts/slider/slider.component';
import { DestinationComponent } from './components/destination/destination.component';
import { HomeElementComponent } from './components/home-element/home-element.component';
import { MainComponent } from './shared/layouts/main/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    SliderComponent,
    DestinationComponent,
    HomeElementComponent,
    MainComponent,
    ProductsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
