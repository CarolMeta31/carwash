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
    lat:string,
    lng:string,
    openHours:string,
    closinghours:string,
    satrdayHrsOpen:string,
    satrdayHrsclose:string,
    sundayHrsOpen:string,
    sundayHrsClose:string,
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
      carwashLatitude:lat,
      carwashLongatude:lng,
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
     females:femaleEmployees
      
     
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
