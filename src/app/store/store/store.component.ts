import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(private readonly inventoryService: InventoryService) {}
  items = this.inventoryService.items;

  addItemToCart(item: Item) {
    this.inventoryService.addItemToCart(item);
  }
}
