import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable()
export class OperationalDetailsProvider {

  public carWashListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.carWashListRef = firebase
          .database()
          .ref(`/userProfile/${user.uid}/carwashOpertaionsDetails`);
      }
    });
    console.log('Hello OperationalDetailsProvider Provider');
  }

  createCarOperationsDetails(
    entertainmentAvail:boolean,
    entertainmentArea:string,
    numberOfCarsSedan:number,
    numberOfCarsSuv:number,
    numberOfCarsVan:number,
    numberOfCarsMini:number,
    numberOfCarsTruck:number,
    maleEmployees:number,
    femaleEmployees:number
  ): firebase.database.ThenableReference {
    return this.carWashListRef.push({
      entertainAvailable: entertainmentAvail,
      typeOfArea:entertainmentArea,
     sedanCars: numberOfCarsSedan,
     suvCars: numberOfCarsSuv,
      vanCars:numberOfCarsVan,
      miniCars:numberOfCarsMini,
     truckCars: numberOfCarsTruck,
      males:maleEmployees,
     females: femaleEmployees
     
    });
  }
  //listing function
  getoperationsList(): firebase.database.Reference {
    return this.carWashListRef;
  }
  // receiving an event’s ID and returning that carwash
  getoperationsDetail(carwashId:string): firebase.database.Reference {
    return this.carWashListRef.child(carwashId);
  }
}
