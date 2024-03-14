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
  filterBy: string = 'all';

  updateFilterBy(value: string) {
    this.filterBy = value;
  }

  addItemToCart(item: Item) {
    this.inventoryService.addItemToCart(item);
  }

  fruits = this.items.then((items) =>
    items.filter((item) => item.type === 'fruit')
  );

  vegetables = this.items.then((items) =>
    items.filter((item) => item.type === 'vegetable')
  );

  get filteredItems() {
    if (this.filterBy === 'all') {
      return this.items;
    } else if (this.filterBy === 'fruit') {
      return this.fruits;
    } else return this.vegetables;
  }
}
