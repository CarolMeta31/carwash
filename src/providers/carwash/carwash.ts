import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import firebase , { User }from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Injectable()
export class CarwashProvider {

  currentUser:User;

  public carWashListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(users=> {
      if (users) {
        this.currentUser=users;
        this. carWashListRef=firebase.database().ref(`/carwashes`)
        
      }
    });
    console.log('Hello CarwashProvider Provider');
  }
  
  createCarwashDetails(
    //slide1
    carwashName:string,
    location:string,
    openHours:Time,
    closinghours:Time,
    satrdayHrsOpen:Time,
    satrdayHrsclose:Time,
    sundayHrsOpen:Time,
    sundayHrsClose:Time,
    //slide2
    entertainmentAvailable:boolean,
    entertainmentArea:string,
   numberOfCarsSedan:number,
   numberOfCarsSuv:number,
   numberOfCarsVan:number,
   numberOfCarsMini:number,
    numberOfCarsTruck:number,
    maleEmployees:number,
     femaleEmployees:number,
    
   
  ): firebase.database.ThenableReference {
    return this.carWashListRef.push({
      //slide1
      carwashName: carwashName,
      carwashLocation:location,
      weekdayOpen: openHours,
      weekdayClose: closinghours,
      saturdayOpen: satrdayHrsOpen,
      saturdayClose: satrdayHrsclose,
      sundayOpen:sundayHrsOpen,
      sundayClose:sundayHrsClose,
      //slide2
      entertainAvail: entertainmentAvailable,
      typeOfArea:entertainmentArea,
     sedanCars: numberOfCarsSedan,
    suvCars: numberOfCarsSuv,
     vanCars:numberOfCarsVan,
     miniCars:numberOfCarsMini,
    truckCars: numberOfCarsTruck,
     males:maleEmployees,
     females: femaleEmployees,
      
     
    });
  }
   //listing function
   getcarwashList(): firebase.database.Reference {
    return this.carWashListRef;
  }
  // receiving an event’s ID and returning that event
  getcarwashDetail(carwashId:string): firebase.database.Reference {
    return this.carWashListRef.child(carwashId);
  }

}
