import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ProductoProvider } from './../../providers/producto/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  title: string;
  form: FormGroup;
  producto: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ProductoProvider,
    private toast: ToastController) {
      if (this.navParams.data.key) {
        const subcribe = this.provider.get(this.navParams.data.key)
        .subscribe((c: any) => {
          subcribe.unsubscribe();

          this.producto = c;
          this.createForm();
        })

      } else {
        this.producto = {};
        this.createForm();
      }

      this.setupPageTitle();

      }
      //metodos//
 private setupPageTitle(){
  this.title = this.navParams.data.producto ? 'Producto Modificado' : 'Nuevo Producto';
}

//formulario para ingresar datos, con validacion de caracteres//
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
      this.toast.create({message: 'Producto Guardado con Exito.', duration: 3000}).present();
      this.navCtrl.pop();

    })
    .catch((e) => {
     this.toast.create({message: 'Error al guardar.', duration: 3000}).present();
     console.error(e);

    });
  }
  
}




}
