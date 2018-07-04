import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { UserModel } from '../../models/user-models';

import { HomePage } from '../home/home';
/**
 * 
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userModel: UserModel;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthService) {

    this.userModel = new UserModel();
  }

  signUp() {
    let loading = this.loadingCtrl.create({
        content: 'Creando cuenta. Por favor, espere...'
    });
    loading.present();

    this.authService.createUserWithEmailAndPassword(this.userModel).then(result => {
        loading.dismiss();

        this.navCtrl.push(HomePage);
    }).catch(error => {
        loading.dismiss();

        console.log(error);
        this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
    });
}

alert(title: string, message: string) {
    let alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
    });
    alert.present();
}

volverAtras(){
    this.navCtrl.push(HomePage);
}
}
