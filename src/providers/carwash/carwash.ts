import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Injectable()
export class CarwashProvider {



  //main declaration of carwash details
  carwashName:string;
  location:string;
  openHours:Time;
  closinghours:Time;
  satrdayHrs:Time;
  sundayHrs:Time;
  entertainmentAvailable:boolean;


  //carwash details declaration
  numberOfCarsSedan:number;
  numberOfCarsSuv:number;
  numberOfCarsVan:number;
  numberOfCarsMini:number;
  numberOfCarsTruck:number;
  maleEmployees:number;
  femaleEmployees:number;
  moneyMade:string;


  constructor() {
    console.log('Hello CarwashProvider Provider');
  }
  
 mainDetails(carwashName,location,openHours,closinghours,satrdayHrs,sundayHrs,entertainmentAvailable){

  firebase.database().ref(`/MaincarwashDetails`).push().set({
    carwashName:this.carwashName,
    location:this.location,
    openHours:this.openHours,
    closinghours:this.closinghours,
    satrdayHrs:this.satrdayHrs,
    sundayHrs:this.sundayHrs,
    entertainmentAvailable:this.entertainmentAvailable

  })
 }
 carwashDetails(numberOfCarsSedan,
  numberOfCarsSuv,
  numberOfCarsVan,
  numberOfCarsMini,
  numberOfCarsTruck,
  maleEmployees,
  femaleEmployees,
  moneyMade){

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
