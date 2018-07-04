import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductoProvider {
  private PATH = 'productos/';

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));

      })
     }

  get(key: string) {
    return this.db.object(this.PATH + key)
      .snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      })

  }

  save(producto: any){
    return new Promise((resolve, reject) => {
      if (producto.key){
        this.db.list(this.PATH)
        .update(producto.key, { name: producto.name, precio: producto.precio })
        .then(() => resolve())
        .catch((e) => reject(e));

       
      } else {

        this.db.list(this.PATH)
        .push({ name: producto.name, precio: producto.precio })
        .then(() => resolve());
        

      
      }
    })

  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);

  }
}
