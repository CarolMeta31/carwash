import { CarwashProvider } from './../../providers/carwash/carwash';
import { OperationalDetailsProvider } from './../../providers/operational-details/operational-details';
import { CarwashListDetailsPage } from './../carwash-list-details/carwash-list-details';
import { MainDetailsProvider } from './../../providers/main-details/main-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-data',
  templateUrl: 'list-data.html',
})
export class ListDataPage {

  public carwashList: Array<any>;

  key:string;
  public carwashoperations: Array<any>;

  keys:string;
 public carsDetails: Array<any>;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,private carPro:CarwashProvider,
  private mainPro:MainDetailsProvider,private operationsPro:OperationalDetailsProvider) {
 
 
 
 
  }

  ionViewDidLoad() {
        //Now we need to get that list of events from Firebase
        this.mainPro.getEventList().on("value", carwashListSnapshot => {
          this.carwashList= [];
          carwashListSnapshot.forEach(snap => {
            this.carwashList.push({
              id: snap.key,
              carwashName: snap.val().carwashName,
              carwashLocation: snap.val().carwashLocation,
              weekdayOpen: snap.val().weekdayOpen,
              weekdayClose: snap.val().weekdayClose,
              
              saturdayOpen: snap.val().saturdayOpen,
              saturdayClose:snap.val().saturdayClose,
              sundayOpen:snap.val().sundayOpen,
              sundayClose:snap.val().sundayClose,
            });
            return false;
          });
        });
    console.log('cars',this.carwashList);
    //Now we need to get that list of events from Firebase
    this.operationsPro.getoperationsList().on("value", carwashListSnapshot => {
      this.carwashoperations= [];
      carwashListSnapshot.forEach(snap => {
        this.carwashoperations.push({
          id: snap.key,
          entertainAvailable: snap.val(). entertainAvailable,
          typeOfArea: snap.val().typeOfArea,
          sedanCars: snap.val().sedanCars,
          suvCars: snap.val().suvCars,
          
          vanCars: snap.val().vanCars,
          miniCars:snap.val(). miniCars,
          truckCars:snap.val().truckCars,
          males:snap.val().males,
          females:snap.val().females,
        });
        return false;
      });
    });
     //Now we need to get that list of events from Firebase
     this.carPro.getcarsList().on("value", carwashListSnapshot => {
      this.carsDetails= [];
      carwashListSnapshot.forEach(snap => {
        this.carsDetails.push({
          id: snap.key,
          durationForSUV: snap.val().durationForSUV,
          durationForSedan: snap.val().durationForSedan,
          durationForMini: snap.val().durationForMini,
          durationForVan: snap.val().durationForVan,
          durationForTruck: snap.val().durationForTruck,

           costOfSuv: snap.val().costOfSuv,
           costOfSedan:snap.val().costOfSedan,
           costOfMini:snap.val().costOfMini,
           costOfVan:snap.val().costOfVan,
           costOfTruck:snap.val().costOfTruck
        });
        return false;
      });
    });
    console.log('operations',this.carwashoperations);
  }

// function to send users to the event detail
goToCarwashDetail(carwashId: string):void {
 //calls the other two functions
  this.checkoutOps();
  this.checkoutCarsDetails();

  this.navCtrl.push(CarwashListDetailsPage, { carwashId:carwashId, keyId:this.key , keysID:this.keys});
}
//function search the other key from the next category
checkoutOps():void {
  for(var i=0;i<this.carwashoperations.length;i++){
    this.key=this.carwashoperations[i].id;
  }
  
}
//function search key from the third category
checkoutCarsDetails():void {
  for(var i=0;i<this.carsDetails.length;i++){
    this.keys=this.carsDetails[i].id;
  }
  
}
}
