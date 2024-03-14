import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private readonly inventoryService: InventoryService) {}
  cart = this.inventoryService.cart;

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.cart.splice(
        this.cart.findIndex((cartItem) => cartItem.id === item.id),
        1
      );
    }
  }
}
