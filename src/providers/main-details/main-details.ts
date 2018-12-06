
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { Time } from '@angular/common';

@Injectable()
export class MainDetailsProvider {

  public carWashListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.carWashListRef = firebase
          .database()
      
          .ref(`/userProfile/${user.uid}/MaincarwashDetails`);
      }
    });
    console.log('Hello MainDetailsProvider Provider');
  }

createCarwashMainDetails(
    carwashName:string,
    location:string,
    openHours:Time,
    closinghours:Time,
    satrdayHrsOpen:Time,
    satrdayHrsclose:Time,
    sundayHrsOpen:Time,
    sundayHrsClose:Time
  ): firebase.database.ThenableReference {
    return this.carWashListRef.push({
      carwashName: carwashName,
      carwashLocation:location,
      weekdayOpen: openHours,
      weekdayClose: closinghours,
      saturdayOpen: satrdayHrsOpen,
      saturdayClose: satrdayHrsclose,
      sundayOpen:sundayHrsOpen,
      sundayClose:sundayHrsClose,
     
    });
  }
  //listing function
  getEventList(): firebase.database.Reference {
    return this.carWashListRef;
  }
  // receiving an event’s ID and returning that event
  getEventDetail(carwashId:string): firebase.database.Reference {
    return this.carWashListRef.child(carwashId);
  }
  

}
