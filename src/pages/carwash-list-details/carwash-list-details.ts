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


  constructor(public navCtrl: NavController,private carPro:CarwashProvider,
     public navParams: NavParams) {
  }

  ionViewCanEnter() {
    this.carPro
    .getcarwashDetail(this.navParams.get("carwashId"))
    .on("value", carwashSnapshot => {
      this.currentCarwash = carwashSnapshot.val();
      this.currentCarwash.id = carwashSnapshot.key;
    });
    
      
    console.log('ionViewDidLoad CarwashListDetailsPage',this.currentCarwash);
  }
 
    
  

}
