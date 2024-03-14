import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent {
  @Input('item') item: Item | null = null;
  @Output('add') add = new EventEmitter<Item>();

  addToCart() {
    if (!this.item) {
      throw new Error('cannot add null item');
    }
    this.add.emit({
      ...this.item,
    });
  }
}
