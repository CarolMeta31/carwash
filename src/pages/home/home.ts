import { CarPage } from './../car/car';
import { EntertainmentPage } from './../entertainment/entertainment';
import { CarDetailsPage } from './../car-details/car-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
  category=[]
  Cards:string='';

constructor(public navCtrl: NavController) {}
sortedByCards(i:number){
  this.category=[];
  this.category = ['CarWashDetails'];
  this.Cards=this.category[i];

  this.navCtrl.push(CarDetailsPage);
}
sortedByCard(i:number){
  this.category=[];
  this.category = ['Entertainment'];
  this.Cards=this.category[i];

  this.navCtrl.push(EntertainmentPage);
}
next(){
  this.navCtrl.push(CarPage);
}
}
