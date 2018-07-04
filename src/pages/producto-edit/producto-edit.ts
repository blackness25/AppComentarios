import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ProductoProvider } from './../../providers/producto/producto';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the ProductoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto-edit',
  templateUrl: 'producto-edit.html',
})
export class ProductoEditPage {
  title: string;
  form: FormGroup;
  producto: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,
    private provider: ProductoProvider,
    private toast: ToastController) {
      // maneira 1
      this.producto = this.navParams.data.producto || { };
      this.createForm();
   
      // // maneira 2
      // this.contact = { };
      // this.createForm();
   
      // if (this.navParams.data.key) {
      //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
      //     subscribe.unsubscribe();
   
      //     this.contact = c;
      //     this.createForm();
      //   })
      // }
   
      this.setupPageTitle();
    }
   
    private setupPageTitle() {
      this.title = this.navParams.data.producto ? 'Modificando Producto' : 'Nuevo Producto';
    }
   
    createForm() {
      this.form = this.formBuilder.group({
        key: [this.producto.key],
        name: [this.producto.name, Validators.required],
        precio: [this.producto.precio, Validators.required],
      });
    }
   
    onSubmit() {
      if (this.form.valid) {
        this.provider.save(this.form.value)
          .then(() => {
            this.toast.create({ message:'Producto Guardado con Exito.', duration: 3000 }).present();
            this.navCtrl.pop();
          })
          .catch((e) => {
            this.toast.create({ message: 'Error al guardar.', duration: 3000 }).present();
            console.error(e);
          })
      }
    }
  }