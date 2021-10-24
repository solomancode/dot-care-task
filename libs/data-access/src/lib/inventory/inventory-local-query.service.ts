import { Injectable } from '@angular/core';
import { Assertion, FlatItem, ItemQueryObject } from '@dot-care/@types';

@Injectable({
  providedIn: 'root',
})
export class InventoryLocalQueryService {
  Name(item: FlatItem, query: ItemQueryObject) {
    return item.Name.toLowerCase().indexOf(query.Name.toLowerCase()) >= 0;
  }

  CategoryId(item: FlatItem, query: ItemQueryObject) {
    console.log(item.CategoryId, query.CategoryId);
    if (query.CategoryId.length === 0) return true;
    return query.CategoryId.includes(item.CategoryId);
  }

  WarehouseId(item: FlatItem, query: ItemQueryObject) {
    if (query.WarehouseId.length === 0) return true;
    return query.WarehouseId.includes(item.Stock.WarehouseId);
  }

  Balance(item: FlatItem, query: ItemQueryObject) {
    const [Operator, value] = query.Balance;
    console.log({ Operator, value });
    switch (Operator) {
      case '<':
        return item.Stock.Balance < value;
      case '>':
        return item.Stock.Balance > value;
      case '=':
        return item.Stock.Balance === value;
    }
  }

  getQueryAssertions(query: Partial<ItemQueryObject>): Assertion[] {
    const assertions = [];
    for (const key in query) {
      if (this.keyExists(key)) {
        const assertion = this[key] as Assertion;
        assertions.push(assertion);
      }
    }
    return assertions;
  }

  keyExists(key: string): key is keyof InventoryLocalQueryService {
    return key in this;
  }

  match(item: FlatItem, query: Partial<ItemQueryObject>) {
    const assertions = this.getQueryAssertions(query);
    return assertions.every((assert) => assert(item, query as ItemQueryObject));
  }
}
