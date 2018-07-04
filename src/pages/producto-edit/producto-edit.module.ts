import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoEditPage } from './producto-edit';

@NgModule({
  declarations: [
    ProductoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoEditPage),
  ],
})
export class ProductoEditPageModule {}
