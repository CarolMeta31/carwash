import { CarwashListDetailsPage } from './../carwash-list-details/carwash-list-details';
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
import {Geolocation} from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

  que:string='main'


  form: FormGroup;
  Cards:string='';
  carwashName:string='';
  location:string='';
  openHours:string='';
    closinghours:string='';
    satrdayHrsOpen:string='';
    satrdayHrsclose:string='';
    sundayHrsOpen:string='';
    sundayHrsClose:string='';
  entertainmentArea:string='';


  userForm:FormGroup;
  lat:any;
  lng:any;
  

  


  constructor(public navCtrl: NavController,private carwashPro:CarwashProvider,
    public formBuilder: FormBuilder,private authPro:AuthProvider,public alertCtrl:AlertController,private geo:Geolocation,public geofence: Geofence) {
      this.userForm= this.formBuilder.group({
    
        lat:['',Validators.compose([Validators.required,,Validators.pattern('[a-zA-Z ]*')])],
        lng:['',Validators.compose([Validators.required,,Validators.pattern('[a-zA-Z ]*')])],
        carwashName:['',Validators.compose([Validators.required,,Validators.pattern('[a-zA-Z ]*')])],
        entertainmentArea:['',Validators.compose([Validators.required,,Validators.pattern('[a-zA-Z ]*')])],
        suvDuration:['',Validators.compose([Validators.required,,Validators.pattern('[0-9]*')])],
        suvCost:['',Validators.compose([Validators.required,,Validators.pattern('[0-9]*')])], 
        sedanDuration:['',Validators.compose([Validators.required,,Validators.pattern('[0-9]*')])],
      })

      geofence.initialize().then(
        () => console.log('Geofence Plugin Ready'),
        (err) => console.log(err)
      )
// Form control name with default value and validator
this.form = formBuilder.group({
  option: ['', Validators.required]
});


} // constructor()

submitForm(event): void {
// Prevent default submit action
event.preventDefault();


}

locate(){
  this.geo.getCurrentPosition().then(pos=>{
    this.lat= pos.coords.latitude;
    this.lng = pos.coords.longitude;
  }).catch(err =>console.log(err));

  let alert = this.alertCtrl.create({
    title: 'Thank You!',
    subTitle: 'Your current coordinates have been captured!',
    buttons: ['OK']
  });
  alert.present();
  
}

private addGeofence() {

  let fence = {
    id: 'Data Watch', 
    latitude:      -26.024479, 
    longitude:      28.1865748,
    radius:         100, 
    transitionType: 5,
    notification: { 
        id:             1, 
        title:          'You crossed a fence', 
        text:           'You just arrived to the carwash.', 
        openAppOnClick: true 
    }
  }

  this.geofence.addOrUpdate(fence).then(
     () => console.log('Geofence added'),
     (err) => console.log('Geofence failed to add')
   );
   

}

  //slide 1 main details
  createMainDetails(
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

    entertainmentArea:string,
    numberOfCarsSedan:number,
   numberOfCarsVan:number,
    numberOfCarsTruck:number,
    maleEmployees:number,
  femaleEmployees:number
  ): void {
    if (this.carwashName === "" || this.lat === "" || this.lng === "" || this.entertainmentArea===""||this.openHours===""||this.closinghours===""||this.satrdayHrsOpen===""||this.satrdayHrsOpen===""||this.sundayHrsOpen===""||this.sundayHrsClose==="") {
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
        lat,
        lng,
        openHours,
        closinghours,
         satrdayHrsOpen,
        satrdayHrsclose,
        sundayHrsOpen,
        sundayHrsClose,
      //slide 2

            entertainmentArea,
           numberOfCarsSedan,
           numberOfCarsVan,
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
