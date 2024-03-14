import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { StoreItemComponent } from './store-item/store-item.component';

@NgModule({
  declarations: [StoreComponent, CartComponent, TotalComponent, StoreItemComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [StoreComponent, CartComponent, TotalComponent],
})
export class StoreModule {}
