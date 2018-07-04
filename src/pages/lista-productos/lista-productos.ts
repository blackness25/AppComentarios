import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { ProductoProvider } from '../../providers/producto/producto';
import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';
/**
 * Generated class for the ListaProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-productos',
  templateUrl: 'lista-productos.html',
})
export class ListaProductosPage {
  productos: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ProductoProvider,
    private toast: ToastController,
      public authService: AuthService) {

    this.productos = this.provider.getAll();

  }
  newProducto() {
    this.navCtrl.push('ProductoPage');
  }

  editProducto(producto: any) {
    this.navCtrl.push('ProductoEditPage', { producto: producto });



  }
  removeProducto(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'producto eliminado con exito!.', duration: 3000 }).present();

        })
        .catch((e) => {
          this.toast.create({ message: 'error al elminar producto!.', duration: 3000 }).present();

        })

    }
  }
  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(HomePage);
  }
}