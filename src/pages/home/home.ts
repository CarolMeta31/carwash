<<<<<<< HEAD
import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
=======
import { OperationalDetailsProvider } from './../../providers/operational-details/operational-details';
import { MainDetailsProvider } from './../../providers/main-details/main-details';
>>>>>>> 84e810c50d5c7e8275fcdfa3125e86983607bd38
import { MainDetailsPage } from './../main-details/main-details';
import { CarPage } from './../car/car';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { EntertainmentPage } from './../entertainment/entertainment';
import { CarDetailsPage } from './../car-details/car-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Time } from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

  Cards:string='';
 


  //carwash details declaration
  testRadioOpen: boolean;
  testRadioResult;
  entertainmentAvailable:boolean;
  entertainmentArea:string;
   numberOfCarsSedan:number;
  numberOfCarsSuv:number;
  numberOfCarsVan:number;
  numberOfCarsMini:number;
  numberOfCarsTruck:number;
  maleEmployees:number;
  femaleEmployees:number;
  //slide3 declaractions
  cars=[];
  car='suv';
  suvDuration:number;
  sedanDuration:number;
  miniDuration:number;
  vanDuration:number;
  truckDuration:number;

  suvCost:string;
  sedanCost:string;
  miniCost:string;
  vanCost:string;
  truckCost:string;
 
  


<<<<<<< HEAD
  constructor(public navCtrl: NavController,private authPro:AuthProvider,
    private carwashPro:CarwashProvider) {
=======
  constructor(public navCtrl: NavController,private carsPro:CarwashProvider,
    private carwashPro:CarwashProvider ,private operationsPro:OperationalDetailsProvider,private mainPro:MainDetailsProvider) {
>>>>>>> 84e810c50d5c7e8275fcdfa3125e86983607bd38

  }
  //slide 1 main details
  createMainDetails(
    carwashName:string,
    location:string,
    openHours:Time,
    closinghours:Time,
    
    satrdayHrsOpen:Time,
    satrdayHrsclose:Time,
    sundayHrsOpen:Time,
    sundayHrsClose:Time
  ): void {
    this.mainPro
      .createCarwashMainDetails(carwashName,
        location,
        openHours,
        closinghours,

        satrdayHrsOpen,
        satrdayHrsclose,
        sundayHrsOpen,
        sundayHrsClose)
      .then(newCarwashDetails => {
        //goes back to welcome page
        this.navCtrl.pop();
      });
  }
  //slide 2 car details
  saveCarOperationsDetails(
    entertainmentAvail:boolean,
    entertainmentArea:string,
     numberOfCarsSedan:number,
    numberOfCarsSuv:number,
    numberOfCarsVan:number,
    numberOfCarsMini:number,
    numberOfCarsTruck:number,
    maleEmployees:number,
    femaleEmployees:number,
  
  ): void {
    this.operationsPro
      .createCarOperationsDetails(entertainmentAvail,
        entertainmentArea,
        numberOfCarsSedan,
        numberOfCarsSuv,
        numberOfCarsVan,
        numberOfCarsMini,
        numberOfCarsTruck,
        maleEmployees,
        femaleEmployees)
      .then(newCarwashOperations => {
        this.navCtrl.pop();
      });
    }
   
//slide 3 
  nextMainDetails(){
    this.navCtrl.push(MainDetailsPage);
  }
    nextOperationalDetails(){
    this.navCtrl.push(CarDetailsPage);
  }

    nextCarDetails(){

  

    this.navCtrl.push(CarPage);
     }

<<<<<<< HEAD

     logOut(): void {
      this.authPro.logoutUser().then(() => {
        this.navCtrl.setRoot(LoginPage);
      });
    }
=======
     createCarsDetail(
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
      
  ): void {
    this.carsPro
      .createCarsDetails(suvDuration,
        sedanDuration,
        miniDuration,
        vanDuration,
        truckDuration,
    
        suvCost,
        sedanCost,
         miniCost,
         vanCost,
         truckCost,)
      .then(newEvent => {
        this.navCtrl.pop();
      });
    }
  
    nextsed(){
      this.car='sedan';
    }
  
    nextmin(){
      this.car='mini';
    }
  
    nextsuv(){
      this.car='suv'
    }
  
    nextvan(){
      this.car='van'
    }
    nexttruck(){
      this.car='truck'
    }

>>>>>>> 84e810c50d5c7e8275fcdfa3125e86983607bd38
 
    
}
