import { Component,ViewChild } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import * as firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the ComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {
  @ViewChild("content") content: any
  nomUser: string = "";
  titulo: string = "";
  sugerencia: string = ""; 
  sugerencias = [];

  constructor( public authService: AuthService, public navCtrl: NavController, public navParams: NavParams) {
    this.getSugerencias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentariosPage');
  }
  getSugerencias() {
    var sugerenciasRef = firebase.database().ref().child("sugerencia");
    sugerenciasRef.on("value", (snap) => {
      var data = snap.val();
      this.sugerencias = [];
      for (var key in data) {
        this.sugerencias.push(data[key]);
      }
      this.scrollToBottom();
    });
  }
  removerSugerencia() {
     

  }
  scrollToBottom() {
    var finCont = document.getElementById("finCont").offsetTop;
    this.content.scrollTo(0, finCont, 300);
  }
  //eliminar 
  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(HomePage);
  }
}
