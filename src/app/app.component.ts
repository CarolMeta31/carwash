import { HomePage } from './../pages/home/home';
import { EditProfilePage } from './../pages/edit-profile/edit-profile';
import { LoginPage } from './../pages/login/login';
import { Component ,ViewChild} from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from './../providers/auth/auth';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;


  pages: Array<{ title: string, component: any, icon:string}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
 
    this.pages = [
      {title: 'home', component:HomePage, icon:'home'},
      {title: 'editProfile', component:EditProfilePage, icon:'person'},
      
        {title: 'Logout', component: null,icon:'exit'}
    ];
  }
  openPage(page) {
    if(page.component) {
        this.nav.setRoot(page.component);
    } else {
        // Since the component is null, this is the logout option
        // ...

        // logout logic
        // ...
     
        
        
        
          this.nav.setRoot(LoginPage);

        // redirect to home
        
    }
}
}

