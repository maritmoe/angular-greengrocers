import { Component } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  constructor(private readonly inventoryService: InventoryService) {}
  cart = this.inventoryService.cart;

  get total(): number {
    let totalCost = 0;
    for (let item of this.cart) {
      totalCost += item.quantity * item.price;
    }
    return totalCost;
  }
}
