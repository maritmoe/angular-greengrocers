import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  http = inject(HttpClient);

  // Fetch groceries from API
  get items(): Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}groceries`));
  }

  // Make cart
  cart: CartItem[] = [];

  // Add item to cart
  addItemToCart(newItem: Item) {
    // Checks if item already in cart
    const cartItem = this.cart.find((i) => i.id === newItem.id);
    // Increase quantity
    if (cartItem) {
      cartItem.quantity++;
    }
    // Adds new item to cart
    else {
      this.cart.push({ ...newItem, quantity: 1 });
    }
  }
}
