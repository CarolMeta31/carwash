import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { ListDataPage } from './../list-data/list-data';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private authPro:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  goToCreate(): void {
    this.navCtrl.push(HomePage);
  }
  
  goToList(): void {
    this.navCtrl.push(ListDataPage);
  }

  logOut(): void {
    this.authPro.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
