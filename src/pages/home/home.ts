import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { MainDetailsPage } from './../main-details/main-details';
import { CarPage } from './../car/car';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { EntertainmentPage } from './../entertainment/entertainment';
import { CarDetailsPage } from './../car-details/car-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {FormControl} from '@angular/forms';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

  Cards:string='';

 
  


  constructor(public navCtrl: NavController,private authPro:AuthProvider,
    private carwashPro:CarwashProvider) {

  }

  nextMainDetails(){
    this.navCtrl.push(MainDetailsPage);
  }
    nextOperationalDetails(){
    this.navCtrl.push(CarDetailsPage);
  }

    nextCarDetails(){

  

    this.navCtrl.push(CarPage);
     }


     logOut(): void {
      this.authPro.logoutUser().then(() => {
        this.navCtrl.setRoot(LoginPage);
      });
    }
 
    
}
