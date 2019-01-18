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
      
  }



}
