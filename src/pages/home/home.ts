import { OperationalDetailsProvider } from './../../providers/operational-details/operational-details';
import { MainDetailsProvider } from './../../providers/main-details/main-details';
import { MainDetailsPage } from './../main-details/main-details';
import { CarPage } from './../car/car';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { EntertainmentPage } from './../entertainment/entertainment';
import { CarDetailsPage } from './../car-details/car-details';
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Time } from '@angular/common';
import {FormControl} from '@angular/forms';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
  form: FormGroup;
  Cards:string='';
  carwashName:string='';
  location:string='';
  
  userForm:FormGroup;

  //carwash details declaration
  testRadioOpen: boolean;
  testRadioResult;
  entertainmentAvailable:boolean;
  entertainmentArea:string='';
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
 
  


  constructor(public navCtrl: NavController,private carsPro:CarwashProvider,
    private carwashPro:CarwashProvider ,private operationsPro:OperationalDetailsProvider,public formBuilder: FormBuilder,private mainPro:MainDetailsProvider,public alertCtrl:AlertController) {
      this.userForm= this.formBuilder.group({
    
        location:['',Validators.compose([Validators.required,,Validators.pattern('[a-zA-Z ]*')])],
        carwashName:['',Validators.compose([Validators.required,,Validators.pattern('[a-zA-Z ]*')])],
        entertainmentArea:['',Validators.compose([Validators.required,,Validators.pattern('[a-zA-Z ]*')])],
        suvDuration:['',Validators.compose([Validators.required,,Validators.pattern('[0-9]*')])],
        suvCost:['',Validators.compose([Validators.required,,Validators.pattern('[0-9]*')])], 
        sedanDuration:['',Validators.compose([Validators.required,,Validators.pattern('[0-9]*')])],
      })
 
// Form control name with default value and validator
this.form = formBuilder.group({
  option: ['', Validators.required]
});
} // constructor()

submitForm(event): void {
// Prevent default submit action
event.preventDefault();

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
    if (this.carwashName === "" || this.location === "") {
      const alert = this.alertCtrl.create({
        title: "Warning",
        subTitle: "please fill in all fields",
        buttons: ["OK"]
        
      });
      
      alert.present();
      
    }
      else {
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

 
    
}
