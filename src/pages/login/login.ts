import { WelcomePage } from './../welcome/welcome';
import { ResetpasswordPage } from './../resetpassword/resetpassword';
import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';


import { Component } from '@angular/core';
import {
  Alert,
  AlertController,
  IonicPage,
  Loading,
  LoadingController,
  NavController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    formBuilder: FormBuilder
  ) {

    this.loginForm = formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
goToSignup():void {
    this.navCtrl.push(SignupPage);
  }
  
  goToResetPassword():void {
    this.navCtrl.push(ResetpasswordPage);
  }

  loginUser(): void {
    if (!this.loginForm.valid) {
      console.log(
        `Form is not valid yet, current value: ${this.loginForm.value}`
      );
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      this.authProvider.loginUser(email, password).then(
        authData => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(WelcomePage);
          });
        },
        error => {
          this.loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            alert.present();
          });
        }
      );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
}
