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


  cars=[];
  carwashName:string;
  location:string;
  openHours:Time;
  closinghours:Time;
  satrdayHrsOpen:Time;
  satrdayHrsclose:Time;
  sundayHrsOpen:Time;
  sundayHrsClose:Time;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainDetailsPage');
  }
  save(){
   
    firebase.database().ref(`/MaincarwashDetails`).push().set({
      carwashName:this.carwashName,
  location:this.location,
   openHours:this.openHours,
  closinghours:this.closinghours,
  satrdayHrsOpen:this.satrdayHrsOpen,
  satrdayHrsclose:this.satrdayHrsclose,
  sundayHrsOpen:this.sundayHrsOpen,
  sundayHrsClose:this.sundayHrsClose,
 
     
    })

    console.log(this.carwashName,this.location)
    
   }
}
