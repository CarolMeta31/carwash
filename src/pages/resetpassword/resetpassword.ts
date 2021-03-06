import { LoginPage } from './../login/login';
import { Component } from "@angular/core";
import {
  Alert,
  AlertController,
  IonicPage,
  NavController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";


@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {

  public resetPasswordForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public alertCtrl: AlertController,
    formBuilder: FormBuilder
  ) {
    this.resetPasswordForm = formBuilder.group({
      email: [
        "",
        Validators.compose([Validators.required])
      ]
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }
  resetPassword(): void {
    if (!this.resetPasswordForm.valid) {
      console.log(
        `Form is not valid yet, current value: ${this.resetPasswordForm.value}`
      );
    } else {
      const email: string = this.resetPasswordForm.value.email;
      this.authProvider.resetPassword(email).then(
        user => {
          const alert: Alert = this.alertCtrl.create({
            message: "Check your email for a password reset link",
            buttons: [
              {
                text: "Ok",
                role: "cancel",
                handler: () => {
                  this.navCtrl.pop();
                }
              }
            ]
          });
          alert.present();
        },
        error => {
          const errorAlert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "Ok", role: "cancel" }]
          });
          errorAlert.present();
        }
      );
    }
  }
  backToLogin(){
    this.navCtrl.push(LoginPage);
  }
}
