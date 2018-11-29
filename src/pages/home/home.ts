import { CarPage } from './../car/car';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { EntertainmentPage } from './../entertainment/entertainment';
import { CarDetailsPage } from './../car-details/car-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Time } from '@angular/common';
import {FormControl} from '@angular/forms';

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
  satrdayHrsOpen:Time;
  satrdayHrsclose:Time;
  sundayHrsOpen:Time;
  sundayHrsClose:Time;
  
  entertainmentAvailable:boolean;

  constructor(public navCtrl: NavController,private carwashPro:CarwashProvider) {

  }

  next(){
    this.navCtrl.push(CarPage);
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
      satrdayHrsOpen:this.satrdayHrsOpen,
      satrdayHrsclose:this.satrdayHrsclose,
      sundayHrsOpen:this.sundayHrsOpen,
      sundayHrsClose:this.sundayHrsClose,
       entertainmentAvailable:this.entertainmentAvailable
         
        })

        console.log(this.carwashName,this.location)
        
       }
}
