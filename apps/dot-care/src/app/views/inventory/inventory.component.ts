import { Component, OnInit } from '@angular/core';
import { InventoryItemsService } from '@dot-care/data-access/inventory/inventory-items.service';

type TODO = any;

@Component({
  selector: 'dot-care-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  pages = 0;
  total_count = 0;

  rows = [];

  columns = [
    { prop: 'Name' },
    { name: 'Category' },
    { name: 'Warehouse' },
    { name: 'Balance' },
  ];

  balanceOperators = [
    { value: '=', label: 'Equal To' },
    { value: '<', label: 'Less Than' },
    { value: '>', label: 'Greater Than' },
  ];

  warehouses: TODO = [];
  categories: TODO = [];

  constructor(private inventoryService: InventoryItemsService) {}

  formatItemsData(data: TODO) {
    const map_warehouse: TODO = {};
    const map_category: TODO = {};
    this.warehouses.map((wh: TODO) => {
      map_warehouse[wh.value] = wh.label;
    });
    this.categories.map((cat: TODO) => {
      map_category[cat.value] = cat.label;
    });
    const rows: TODO = [];
    for (const item of data as TODO) {
      item.Stock.forEach((s: TODO) => {
        rows.push({
          Name: item.Name,
          category: map_category[item.CategoryId],
          warehouse: map_warehouse[s.WarehouseId],
          balance: s.Balance,
        });
      });
    }
    return rows;
  }

  formatWarehousesData(data: TODO) {
    this.warehouses = data.map((warehouse: TODO) => ({
      value: warehouse.id,
      label: warehouse.Name,
    }));
  }

  formatCategoriesData(data: TODO) {
    this.categories = data.map((category: TODO) => ({
      value: category.id,
      label: category.Name,
    }));
  }

  async populateInventoryItems() {
    const [categories, warehouses, items] = await Promise.all([
      this.inventoryService.listCategories(),
      this.inventoryService.listWarehouseDetails(),
      this.inventoryService.listInventoryItems(),
    ]);
    this.formatCategoriesData(categories);
    this.formatWarehousesData(warehouses);
    this.rows = this.formatItemsData(items.data);
    this.total_count = items.total_count;
    this.pages = items.total_count / (items.offset - items.start);
  }

  ngOnInit() {
    this.populateInventoryItems();
  }
}
