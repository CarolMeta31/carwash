import { AuthProvider } from './../../providers/auth/auth';
import { LoginPage } from './../login/login';
import { WelcomePage } from './../welcome/welcome';
import { OperationalDetailsProvider } from './../../providers/operational-details/operational-details';
import { MainDetailsProvider } from './../../providers/main-details/main-details';
import { MainDetailsPage } from './../main-details/main-details';
import { CarPage } from './../car/car';
import { CarwashProvider } from './../../providers/carwash/carwash';
import { EntertainmentPage } from './../entertainment/entertainment';
import { CarDetailsPage } from './../car-details/car-details';
import { Component } from '@angular/core';
import { NavController,AlertController, DateTime } from 'ionic-angular';
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
  openHours:DateTime;
  entertainmentArea:string;


  userForm:FormGroup;

  
 
  


  constructor(public navCtrl: NavController,private carwashPro:CarwashProvider,
    public formBuilder: FormBuilder,private authPro:AuthProvider,public alertCtrl:AlertController) {
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
    entertainmentAvail:boolean,
    entertainmentArea:string,
    numberOfCarsSedan:number,
   numberOfCarsSuv:number,
   numberOfCarsVan:number,
   numberOfCarsMini:number,
    numberOfCarsTruck:number,
    maleEmployees:number,
  femaleEmployees:number
  ): void {
    if (this.carwashName === "" || this.location === "" || this.entertainmentArea==="") {
      const alert = this.alertCtrl.create({
        title: "Warning",
        subTitle: "please fill in all fields",
        buttons: ["OK"]
        
      });
      
      alert.present();
      
    }
      else {
    this.carwashPro
      .createCarwashDetails(
        //slide1
        carwashName,
        location,
        openHours,
        closinghours,
         satrdayHrsOpen,
        satrdayHrsclose,
        sundayHrsOpen,
        sundayHrsClose,
      //slide 2
      entertainmentAvail,
            entertainmentArea,
           numberOfCarsSedan,
             numberOfCarsSuv,
           numberOfCarsVan,
          numberOfCarsMini,
          numberOfCarsTruck,
            maleEmployees,
            femaleEmployees)
      .then(newCarwashDetails => {
          //goes back to welcome page
          this.navCtrl.push(WelcomePage);
      });
  }
}
 
 
logOut(){
  this.authPro.logoutUser().then(() => {
    this.navCtrl.setRoot(LoginPage);
  });
}


 
    
}
