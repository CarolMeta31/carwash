import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainDetailsPage } from './main-details';

@NgModule({
  declarations: [
    MainDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MainDetailsPage),
  ],
})
export class MainDetailsPageModule {}
