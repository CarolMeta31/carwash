import { CarwashProvider } from './../../providers/carwash/carwash';
import { MainDetailsProvider } from './../../providers/main-details/main-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OperationalDetailsProvider } from '../../providers/operational-details/operational-details';

/**
 * Generated class for the CarwashListDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carwash-list-details',
  templateUrl: 'carwash-list-details.html',
})
export class CarwashListDetailsPage {

  public currentCarwash: any = {};

  public currentCarOP: any = {};
  
  public  currentCarsdetail:any={};
  constructor(public navCtrl: NavController,private carPro:CarwashProvider,
    private operationPro:OperationalDetailsProvider,
     public navParams: NavParams,private mainPro:MainDetailsProvider) {
  }

  ionViewDidLoad() {
  this.carMain();
  this.carOperations();
  this.carDetails();
    console.log('ionViewDidLoad CarwashListDetailsPage');
  }
  carMain(){
    this.mainPro
    .getEventDetail(this.navParams.get("carwashId"))
    .on("value", carwashSnapshot => {
      this.currentCarwash = carwashSnapshot.val();
      this.currentCarwash.id = carwashSnapshot.key;
    });
    console.log('ionViewDidLoad EventDetailsPage',this.currentCarwash);
  }
   
   carOperations(){
    this.operationPro
    .getoperationsDetail(this.navParams.get("keyId"))
    .on("value", carwashSnapshot => {
      this.currentCarOP = carwashSnapshot.val();
      this.currentCarOP.id =carwashSnapshot.key;
    });
    console.log('ionViewDidLoad EventDetailsPage',this.currentCarOP);
   }


    
   carDetails(){
    this,this.carPro.getcarsDetail(this.navParams.get("keysID"))
    .on("value", carwashSnapshot => {
      this. currentCarsdetail= carwashSnapshot.val();
      this. currentCarsdetail.id = carwashSnapshot.key;
    });
    console.log('ionViewDidLoad EventDetailsPage',this.currentCarsdetail);
  }
    
  

}
