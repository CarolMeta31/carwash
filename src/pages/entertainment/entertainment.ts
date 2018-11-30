import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@IonicPage()
@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage {
// category=[]
//   entertainmentInformation=[];
//   openHours:Time;
//   closinghours:Time;
//   satrdayHrs:Time;
//   sundayHrs:Time;

//   entertainmentPub:string;
//   entertainmentPark:string; 
//   entertainmentRes:string;
//   entertainmentOther:string;

//       noOfEmployees:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntertainmentPage');
  }

}
  // entertainSave(){
  //   firebase.database().ref(`/entertainment`).push().set({
    
  //     openHours:this.openHours,
  //     closinghours:this.closinghours,
  //     satrdayHrs:this.satrdayHrs,
  //     sundayHrs:this.sundayHrs,
      
  //   entertainmentPub:this.entertainmentPub,
  //    entertainmentPark:this.entertainmentPark, 
  //      entertainmentRes:this.entertainmentRes,
  //      entertainmentOther:this.entertainmentOther
  //   })
  // }

