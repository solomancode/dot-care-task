import { Injectable } from '@angular/core';
import { Category, ItemsResponse, Warehouse } from '@dot-care/@types';
import { BehaviorSubject } from 'rxjs';
import * as inventory from './mock.json';

@Injectable({
  providedIn: 'root',
})
export class InventoryDataService {
  items = new BehaviorSubject<ItemsResponse>({
    total_count: 0,
    offset: 0,
    start: 0,
    data: [],
  });

  categories = new BehaviorSubject<Category[]>([]);
  warehouses = new BehaviorSubject<Warehouse[]>([]);

  async loadInventoryItems() {
    const { items } = inventory;
    this.items.next(items);
  }

  async loadWarehouses() {
    const { warehouses } = inventory;
    this.warehouses.next(warehouses);
  }

  async loadCategories() {
    const { categories } = inventory;
    this.categories.next(categories);
  }
}
