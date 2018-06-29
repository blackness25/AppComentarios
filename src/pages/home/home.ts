import { Component } from '@angular/core';
import { NavController,IonicPage, NavParams,AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { ComentariosPage } from '../comentarios/comentarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  pass: any;
  alertCtrl: AlertController;

  constructor(public navCtrl: NavController ) {

  }

  iniciarPage() {
    var usuariosRef = firebase.database().ref().child("usuarios");
    if (usuariosRef.child("users").child("user").equalTo(this.user) || usuariosRef.child("users").child("pass").equalTo(this.pass) ) {
      this.navCtrl.push(ComentariosPage);
    } else {
      const alert = this.alertCtrl.create({
        title: 'ERROR!',
        subTitle: 'Error de autenticacion',
        buttons: ['OK']
      });
      alert.present();
    }
    //usuariosRef.

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


}
