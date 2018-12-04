import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarwashListDetailsPage } from './carwash-list-details';

@NgModule({
  declarations: [
    CarwashListDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CarwashListDetailsPage),
  ],
})
export class CarwashListDetailsPageModule {}
