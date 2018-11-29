import { CarwashProvider } from './../../providers/carwash/carwash';
import { EntertainmentPage } from './../entertainment/entertainment';
import { CarDetailsPage } from './../car-details/car-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Time } from '@angular/common';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
  category=[]
  Cards:string='';

  cars=[];
  carwashName:string;
  location:string;
  openHours:Time;
  closinghours:Time;
  satrdayHrs:Time;
  sundayHrs:Time;
  entertainmentAvailable:boolean;

  constructor(public navCtrl: NavController,private carwashPro:CarwashProvider) {

  }
sortedByCards(i:number){
  this.category=[];
  this.category = ['CarWashDetails'];
  this.Cards=this.category[i];

  this.navCtrl.push(CarDetailsPage);
}
sortedByCard(i:number){
  this.category=[];
  this.category = ['Entertainment'];
  this.Cards=this.category[i];

  this.navCtrl.push(EntertainmentPage);
}


 
      save(){
   
        firebase.database().ref(`/MaincarwashDetails`).push().set({
          carwashName:this.carwashName,
      location:this.location,
       openHours:this.openHours,
      closinghours:this.closinghours,
      satrdayHrs:this.satrdayHrs,
       sundayHrs:this.sundayHrs,
    entertainmentAvailable:this.entertainmentAvailable
         
        })

        console.log(this.carwashName,this.location)
        
       }
}
