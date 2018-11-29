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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }

  carsInformation(){
    firebase.database().ref(`/carsOperationsDetails`).push().set({
      suvDuration:this.suvDuration,
      sedanDuration:this.sedanDuration,
      miniDuration:this.miniDuration,
      vanDuration:this.vanDuration,
      truckDuration:this.truckDuration,
    
      suvCost:this.suvCost,
      sedanCost:this.sedanCost,
      miniCost:this.miniCost,
      vanCost:this.vanCost,
      truckCost:this.truckCost
    });
  }
}
