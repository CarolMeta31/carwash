import { CarwashProvider } from './../../providers/carwash/carwash';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {
 
  cars=[];

  suvDuration:number;
  sedanDuration:number;
  miniDuration:number;
  vanDuration:number;
  truckDuration:number;

  suvCost:string;
  sedanCost:string;
  miniCost:string;
  vanCost:string;
  truckCost:string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private carsPro:CarwashProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }

  createCarsDetail(
    suvDuration:number,
    sedanDuration:number,
    miniDuration:number,
    vanDuration:number,
    truckDuration:number,

    suvCost:string,
    sedanCost:string,
     miniCost:string,
     vanCost:string,
     truckCost:string,
    
): void {
  this.carsPro
    .createCarsDetails(suvDuration,
      sedanDuration,
      miniDuration,
      vanDuration,
      truckDuration,
  
      suvCost,
      sedanCost,
       miniCost,
       vanCost,
       truckCost,)
    .then(newEvent => {
      this.navCtrl.pop();
    });
}
}
