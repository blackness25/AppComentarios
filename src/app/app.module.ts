import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from '../providers/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import {ComentariosPage} from '../pages/comentarios/comentarios';


export const firebaseConfig = {
  apiKey: "AIzaSyCUgtslUd0UdlzWY6NWkIW-X_-C_pTdc44",
  authDomain: "appasperger.firebaseapp.com",
  databaseURL: "https://appasperger.firebaseio.com",
  projectId: "appasperger",
  storageBucket: "appasperger.appspot.com",
  messagingSenderId: "478828909687"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ComentariosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ComentariosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
