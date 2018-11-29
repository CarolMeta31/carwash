import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@IonicPage()
@Component({
  selector: 'page-car-details',
  templateUrl: 'car-details.html',
})
export class CarDetailsPage {
  testRadioOpen: boolean;
  testRadioResult;


  //carwash details declaration
  numberOfCarsSedan:number;
  numberOfCarsSuv:number;
  numberOfCarsVan:number;
  numberOfCarsMini:number;
  numberOfCarsTruck:number;
  maleEmployees:number;
  femaleEmployees:number;
  moneyMade:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarDetailsPage');
  }

 
  saveCarDetails(){
   
    firebase.database().ref(`/carwashDetails`).push().set({
     
     
   

      numberOfCarsSedan:this.numberOfCarsSedan,
      numberOfCarsSuv:this.numberOfCarsSuv,
      numberOfCarsVan:this.numberOfCarsVan,
      numberOfCarsMini:this.numberOfCarsMini,
      numberOfCarsTruck:this.numberOfCarsTruck,

      maleEmployees:this.maleEmployees,
       femaleEmployees:this.femaleEmployees,
       moneyMade:this.moneyMade,
    })

   
    
   }

}
