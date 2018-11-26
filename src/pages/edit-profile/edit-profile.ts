import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading, Alert} from 'ionic-angular';
import 'firebase/database';
import 'firebase/auth';

import firebase, { User } from 'firebase/app';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  private loading: any
  username:string='';
  email:string='';
  phone:string;

  imgPreview = 'https://firebasestorage.googleapis.com/v0/b/carwashapp-4fa12.appspot.com/o/logo.png?alt=media&token=4008c01c-9eaf-43c0-a26e-0f605f6b6627';

  moveon=true;

 userProfile:firebase.database.Reference;
  picture: string = null;
 public base64Image : string;
 isOn:boolean;
status:string;
currentUser:User

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
