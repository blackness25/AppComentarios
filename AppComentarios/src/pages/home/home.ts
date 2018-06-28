import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import * as firebase from'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild("content") content:any
  nomUser:string="";
  titulo:string="";
  sugerencia:string="";
  sugerencias = [];
  constructor(public navCtrl: NavController) {
this.getSugerencias();
  }
getSugerencias(){
  var sugerenciasRef= firebase.database().ref().child("sugerencia");
  sugerenciasRef.on("value",(snap)=>{
    var data =snap.val();
    this.sugerencias=[];
    for(var key in data){
      this.sugerencias.push(data[key]);
    }
    this.scrollToBottom();
  });
}

scrollToBottom(){
  var finCont = document.getElementById("finCont").offsetTop;
  this.content.scrollTo(0, finCont, 300);
}
//eliminar 

}
