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
  sortBy: string = 'none';

  // Update filter type
  updateFilterBy(value: string) {
    this.filterBy = value;
    this.sortItems();
  }

  // Update sort type
  updateSortBy(value: string) {
    this.sortBy = value;
    this.sortItems();
  }

  // Used when clicked on 'Add to cart' button
  addItemToCart(item: Item) {
    this.inventoryService.addItemToCart(item);
  }

  // Filter to get all fruits
  fruits = this.items.then((items) =>
    items.filter((item) => item.type === 'fruit')
  );

  // Filter to get all vegetables
  vegetables = this.items.then((items) =>
    items.filter((item) => item.type === 'vegetable')
  );

  // Used in html to display only chosen type of grocery
  get filteredItems() {
    if (this.filterBy === 'all') {
      return this.items;
    } else if (this.filterBy === 'fruit') {
      return this.fruits;
    } else return this.vegetables;
  }

  // Sorts groceries based on filter and sort criterion
  sortItems() {
    if (this.sortBy === 'priceLow') {
      this.filteredItems.then((items) =>
        items.sort((a, b) => a.price - b.price)
      );
    } else if (this.sortBy === 'priceHigh') {
      this.filteredItems.then((items) =>
        items.sort((a, b) => b.price - a.price)
      );
    } else if (this.sortBy === 'name') {
      this.filteredItems.then((items) =>
        items.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      );
    }
  }
}
