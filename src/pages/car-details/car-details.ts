import { OperationalDetailsProvider } from './../../providers/operational-details/operational-details';
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
  entertainmentAvailable:boolean;
  entertainmentArea:string;
   numberOfCarsSedan:number;
  numberOfCarsSuv:number;
  numberOfCarsVan:number;
  numberOfCarsMini:number;
  numberOfCarsTruck:number;
  maleEmployees:number;
  femaleEmployees:number;



  constructor(public navCtrl: NavController,private operationsPro:OperationalDetailsProvider,
     public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarDetailsPage');
  }

 
  saveCarOperationsDetails(
    entertainmentAvail:boolean,
    entertainmentArea:string,
     numberOfCarsSedan:number,
    numberOfCarsSuv:number,
    numberOfCarsVan:number,
    numberOfCarsMini:number,
    numberOfCarsTruck:number,
    maleEmployees:number,
    femaleEmployees:number,
  
  ): void {
    this.operationsPro
      .createCarOperationsDetails(entertainmentAvail,
        entertainmentArea,
        numberOfCarsSedan,
        numberOfCarsSuv,
        numberOfCarsVan,
        numberOfCarsMini,
        numberOfCarsTruck,
        maleEmployees,
        femaleEmployees)
      .then(newCarwashOperations => {
        this.navCtrl.pop();
      });
    }
   
    
    
   

}
