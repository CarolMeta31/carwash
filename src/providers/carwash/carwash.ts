import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Injectable()
export class CarwashProvider {



  public carWashCarDetailsRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.carWashCarDetailsRef = firebase
          .database()
     
          .ref(`/userProfile/${user.uid}/carDetails/`);
      }
    });
    console.log('Hello CarwashProvider Provider');
  }
  
  createCarsDetails(
    suvDuration:number,
    sedanDuration:number,
    miniDuration:number,
    vanDuration:number,
    truckDuration:number,

    suvCost:string,
    sedanCost:string,
     miniCost:string,
     vanCost:string,
     truckCost:string,
    
   
  ): firebase.database.ThenableReference {
    return this.carWashCarDetailsRef.push({
      durationForSUV:suvDuration,
      durationForSedan:sedanDuration,
      durationForMini: miniDuration,
      durationForVan:vanDuration,
      durationForTruck:truckDuration,
  
     costOfSuv: suvCost,
     costOfSedan: sedanCost,
     costOfMini: miniCost,
     costOfVan: vanCost,
     costOfTruck: truckCost,
      
     
    });
  }
  //listing function
  getcarsList(): firebase.database.Reference {
    return this.carWashCarDetailsRef;
  }
  // receiving an event’s ID and returning that event
  getcarsDetail(carwashId:string): firebase.database.Reference {
    return this.carWashCarDetailsRef.child(carwashId);
  }
}
