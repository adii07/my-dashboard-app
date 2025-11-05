import { RangeKey } from "./Filter";

export type StatRangeEntry = { data: number; growth?: number };
export type StatRanges = Record<RangeKey, StatRangeEntry>;
export type RawStatData = {
  data: number;
  growth?: number;
  ranges?: StatRanges;
};
export type StatWidgetType = {
  title: string;
  rawData: RawStatData;
};

// Derived from public/mocks/topProducts.json rows
export interface TopProductRow {
  productId: string;
  name: string;
  category: string;
  unitsSold: number;
  revenue: number;
}

// Columns are a fixed ordered list in the mock file
export type TopProductColumn = keyof TopProductRow; // 'productId' | 'name' | 'category' | 'unitsSold' | 'revenue'

export interface TopProductsResponse {
  columns: TopProductColumn[]; // matches the columns array in JSON
  rows: TopProductRow[];
}

export type TableWidgetProps = {
  title: string;
  data: TopProductsResponse; // strongly typed table data rows
};

// Generic alternative (future use) to allow different table schemas
export type GenericTableWidgetProps<T extends Record<string, unknown>> = {
  title: string;
  data: T[];
};
