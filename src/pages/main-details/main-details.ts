import { MainDetailsProvider } from './../../providers/main-details/main-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Time } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-main-details',
  templateUrl: 'main-details.html',
})
export class MainDetailsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private mainPro:MainDetailsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainDetailsPage');
  }
  createMainDetails(
    carwashName:string,
    location:string,
    openHours:Time,
    closinghours:Time,
    
    satrdayHrsOpen:Time,
    satrdayHrsclose:Time,
    sundayHrsOpen:Time,
    sundayHrsClose:Time
  ): void {
    this.mainPro
      .createCarwashMainDetails(carwashName,
        location,
        openHours,
        closinghours,

        satrdayHrsOpen,
        satrdayHrsclose,
        sundayHrsOpen,
        sundayHrsClose)
      .then(newCarwashDetails => {
        //goes back to welcome page
        this.navCtrl.pop();
      });
  }
}
