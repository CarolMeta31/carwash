import { Injectable } from '@angular/core';
import 'firebase/database';
import firebase , {User} from 'firebase/app';
import 'firebase/auth';
import {AlertController} from 'ionic-angular';


@Injectable()
export class AuthProvider {

  userProfile:firebase.database.Reference;
  currentUser:User;
  firebasedata=firebase.database().ref('userProfile');
  
  
  
  
    constructor() {
      console.log('Hello AuthProvider Provider');
  
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.currentUser=user;
          this.userProfile=firebase.database().ref(`/userProfile/${user.uid}`)
        }
      })
    }
  //saves user information of profile page to firebase
   saveProfile(Firstname:string,LastName:string,email:string):any{
    return this.userProfile.update({Firstname,LastName,email})
  
   }
    signOut():Promise<any>{
    // const userId:string = firebase.auth().currentUser.uid;
    // firebase.database().ref(`/userProfile/${userId}`).off();
    return firebase.auth().signOut();
  }
  
  
}
