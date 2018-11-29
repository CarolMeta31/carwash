import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Injectable()
export class EntertainmentProvider {



  openHours:Time;
  closinghours:Time;
  satrdayHrs:Time;
  sundayHrs:Time;
  entertainmentPub:string;
  entertainmentPark:string; 
  entertainmentRes:string;
  entertainmentOther:string;

  constructor() {
    console.log('Hello EntertainmentProvider Provider');
  }
  entertainmentInfo(openHours,closinghours,satrdayHrs,sundayHrs,
    entertainmentPub,
    entertainmentPark,
    entertainmentRes,
    entertainmentOther){

    firebase.database().ref(`/CarDetails`).push().set({
  

       openHours:this.openHours,
       closinghours:this.closinghours,
       satrdayHrs:this.satrdayHrs,
       sundayHrs:this.sundayHrs,
       entertainmentPub:this.entertainmentPub,
       entertainmentPark:this.entertainmentPark, 
       entertainmentRes:this.entertainmentRes,
       entertainmentOther:this.entertainmentOther
  
    })
   }
}
