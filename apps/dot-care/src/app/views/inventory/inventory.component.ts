import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Category,
  FlatItem,
  ItemQueryObject,
  Warehouse,
} from '@dot-care/@types';
import { InventoryDataService } from '@dot-care/data-access/inventory/inventory-data.service';
import { InventoryLocalQueryService } from '@dot-care/data-access/inventory/inventory-local-query.service';
import { aggregateLookupId } from '@dot-care/utils/operators/aggregateLookupId';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, mergeMap, scan } from 'rxjs/operators';

@Component({
  selector: 'dot-care-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  providers: [InventoryLocalQueryService],
})
export class InventoryComponent implements OnInit {
  form!: FormGroup;

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

  constructor(
    private inventoryDataService: InventoryDataService,
    private query: InventoryLocalQueryService,
    private fb: FormBuilder
  ) {}

  items: Observable<FlatItem[]> = this.inventoryDataService.items.pipe(
    map((response) => response.data),
    mergeMap((items) =>
      items.map((item) =>
        item.Stock.map((Stock) => ({
          id: item.id,
          Name: item.Name,
          CategoryId: item.CategoryId,
          Stock,
        }))
      )
    ),
    scan((a, n) => {
      return [...a, ...n];
    })
  );

  categories = this.inventoryDataService.categories;
  categoriesDropdown = this.categories.pipe(
    map((categories) =>
      categories.map((category) => ({
        label: category.Name,
        value: category.id,
      }))
    )
  );
  categoriesLookup: Observable<Record<number, Category>> = this.categories.pipe(
    aggregateLookupId()
  );

  warehouses = this.inventoryDataService.warehouses;
  warehousesDropdown = this.warehouses.pipe(
    map((warehouses) =>
      warehouses.map((warehouse) => ({
        label: warehouse.Name,
        value: warehouse.id,
      }))
    )
  );
  warehousesLookup: Observable<Record<number, Warehouse>> =
    this.warehouses.pipe(aggregateLookupId());

  currentQuery = new BehaviorSubject<Partial<ItemQueryObject>>({});

  itemsPrePage = 3;
  currentPage = new BehaviorSubject(0);
  total_pages = this.inventoryDataService.items.pipe(
    map((items) => Math.ceil(items.total_count / this.itemsPrePage))
  );

  rows = combineLatest([
    this.items,
    this.categoriesLookup,
    this.warehousesLookup,
    this.currentQuery,
    this.currentPage,
  ]).pipe(
    map(([items, categoriesLookup, warehousesLookup, query, currentPage]) => {
      const _rows = [];
      const start = currentPage * this.itemsPrePage;
      const currentSpan = items.slice(start, start + this.itemsPrePage);
      for (const item of currentSpan) {
        if (this.query.match(item, query)) {
          const row = {
            Name: item.Name,
            category: categoriesLookup[item.CategoryId].Name,
            warehouse: warehousesLookup[item.Stock.WarehouseId].Name,
            balance: item.Stock.Balance,
          };
          _rows.push(row);
        }
      }
      return _rows;
    })
  );

  fuzzyOptions = this.rows.pipe(map((items) => items.map((item) => item.Name)));

  async loadInventoryData() {
    this.inventoryDataService.loadInventoryItems();
    this.inventoryDataService.loadCategories();
    this.inventoryDataService.loadWarehouses();
  }

  linkQueryUpdates() {
    this.form.valueChanges.subscribe((value) => {
      const query: Partial<ItemQueryObject> = {};
      if (value.Name.trim().length) {
        query.Name = value.Name;
      }
      if (value.SelectedCategories.size > 0) {
        query.CategoryId = [...value.SelectedCategories].map(
          (item) => item.value
        );
      }
      if (value.SelectedWarehouses.size > 0) {
        query.WarehouseId = [...value.SelectedWarehouses].map(
          (item) => item.value
        );
      }
      if (value.BalanceOperator.size === 1 && value.Balance !== null) {
        const [operator] = [...value.BalanceOperator];
        query.Balance = [operator.value, parseInt(value.Balance)];
      }
      this.currentQuery.next(query);
    });
  }

  setupQueryForm() {
    this.form = this.fb.group({
      Name: '',
      SelectedCategories: new Set([]),
      SelectedWarehouses: new Set([]),
      BalanceOperator: new Set([]),
      Balance: null,
    });
    this.linkQueryUpdates();
  }

  ngOnInit() {
    this.loadInventoryData();
    this.setupQueryForm();
  }
}
