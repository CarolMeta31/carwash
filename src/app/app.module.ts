import { ResetpasswordPage } from './../pages/resetpassword/resetpassword';
import { SignupPage } from './../pages/signup/signup';
import { CarwashListDetailsPage } from './../pages/carwash-list-details/carwash-list-details';
import { ListDataPage } from './../pages/list-data/list-data';
import { WelcomePage } from './../pages/welcome/welcome';
import { MainDetailsPage } from './../pages/main-details/main-details';
import { CarPage } from './../pages/car/car';
import { EditProfilePage } from './../pages/edit-profile/edit-profile';
import { LoginPage } from './../pages/login/login';
import { EntertainmentPage } from './../pages/entertainment/entertainment';
import { CarDetailsPage } from './../pages/car-details/car-details';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { CarwashProvider } from '../providers/carwash/carwash';
import { EntertainmentProvider } from '../providers/entertainment/entertainment';

import { MainDetailsProvider } from '../providers/main-details/main-details';
import { OperationalDetailsProvider } from '../providers/operational-details/operational-details';
import { MarkerProvider } from '../providers/marker/marker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarDetailsPage,
    EntertainmentPage,
    LoginPage,
    EditProfilePage,
    CarPage,
    MainDetailsPage,
    WelcomePage,
    ListDataPage,
    CarwashListDetailsPage,
    SignupPage,
    ResetpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarDetailsPage,
    EntertainmentPage,
    LoginPage,
    EditProfilePage,
    CarPage,
    MainDetailsPage,
    WelcomePage,
    ListDataPage,
    CarwashListDetailsPage,
    SignupPage,
    ResetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CarwashProvider,
    EntertainmentProvider,
    MainDetailsProvider,
    OperationalDetailsProvider,
    MarkerProvider
  ]
})
export class AppModule {}
