import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SignupPage } from '../pages/signup/signup';
import {ListaProductosPage} from '../pages/lista-productos/lista-productos';
import { ProductoProvider } from '../providers/producto/producto';


export const firebaseConfig = {
  apiKey: "AIzaSyC6v7D9sQ8Qvu7KwSawn9MAQdlsojm0bec",
    authDomain: "crudtest-383da.firebaseapp.com",
    databaseURL: "https://crudtest-383da.firebaseio.com",
    projectId: "crudtest-383da",
    storageBucket: "crudtest-383da.appspot.com",
    messagingSenderId: "716666609615"


};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ListaProductosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ListaProductosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductoProvider,
    AuthService
  ]
})
export class AppModule { }
