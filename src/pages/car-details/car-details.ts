import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the CarDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-details',
  templateUrl: 'car-details.html',
})
export class CarDetailsPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarDetailsPage');
  }

  suv() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Duration of washing the car');

    alert.addInput({
      type: 'radio',
      label: '10-30',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '30-60',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '60-90',
      value: 'question1.3'
    });
  
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.suvv();
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });


  }

  suvv() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Cost of washing a car?');

    alert.addInput({
      type: 'radio',
      label: '30-50',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '50-80',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '80-110',
      value: 'question1.3'
    });
  
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });


  }

  sedan() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Duration of washing the car');

    alert.addInput({
      type: 'radio',
      label: '10-30',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '30-60',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '60-90',
      value: 'question1.3'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.sed();
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  sed() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Cost of washing a car?');

    alert.addInput({
      type: 'radio',
      label: '30-50',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '50-80',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '80-110',
      value: 'question1.3'
    });
  
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });


  }

  van() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Duration of washing the car');

    alert.addInput({
      type: 'radio',
      label: '10-30',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '30-60',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '60-90',
      value: 'question1.3'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.vann();
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  vann() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Cost of washing a car?');

    alert.addInput({
      type: 'radio',
      label: '30-50',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '50-80',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '80-110',
      value: 'question1.3'
    });
  
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });


  }  

  mini() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Duration of washing the car');

    alert.addInput({
      type: 'radio',
      label: '10-30',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '30-60',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '60-90',
      value: 'question1.3'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.min();
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  min() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Cost of washing a car?');

    alert.addInput({
      type: 'radio',
      label: '30-50',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '50-80',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '80-110',
      value: 'question1.3'
    });
  
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });


  }

  truck() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Duration of washing the car');

    alert.addInput({
      type: 'radio',
      label: '10-30',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '30-60',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '60-90',
      value: 'question1.3'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.truc();
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  truc() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Cost of washing a car?');

    alert.addInput({
      type: 'radio',
      label: '30-50',
      value: 'question1.1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '50-80',
      value: 'question1.2'
    });

    alert.addInput({
      type: 'radio',
      label: '80-110',
      value: 'question1.3'
    });
  
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });


  }
 


}
