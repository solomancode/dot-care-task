import { Injectable } from '@angular/core';
import * as inventory from './mock.json';

@Injectable({
  providedIn: 'root',
})
export class InventoryItemsService {
  async listInventoryItems() {
    const { items } = inventory;
    return items;
  }

  async listWarehouseDetails() {
    const { warehouse } = inventory;
    return warehouse;
  }

  async listCategories() {
    const { categories } = inventory;
    return categories;
  }
}
