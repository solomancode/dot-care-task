export interface DatatableRow {
  Name: string;
  category: string;
  warehouse: string;
  balance: number;
}

export interface Stock {
  SKU: string;
  WarehouseId: number;
  Balance: number;
}

export interface Item {
  id: number;
  Name: string;
  CategoryId: number;
  Stock: Stock[];
}

export interface FlatItem {
  id: number;
  Name: string;
  CategoryId: number;
  Stock: Stock;
}

export interface ItemsMetaData {
  total_count: number;
  start: number;
  offset: number;
}

export interface ItemsResponse extends ItemsMetaData {
  data: Item[];
}

export type BalanceOperator = '=' | '>' | '<';

export interface ItemQueryObject {
  Name: string;
  CategoryId: number[];
  WarehouseId: number[];
  Balance: [BalanceOperator, number];
}

export interface Category {
  id: number;
  Name: string;
}

export interface Warehouse {
  id: number;
  Name: string;
}

export type Assertion = (item: FlatItem, target: ItemQueryObject) => boolean;
