import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './components/destination/destination.component';
import { AppComponent } from './app.component';
import { SliderComponent } from './shared/layouts/slider/slider.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: 'acceuil',
    component: SliderComponent,
  },
  {
    path: 'destination',
    component: DestinationComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: 'acceuil',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
