import { RangeKey } from './Filter';
import { StatRanges, StatRangeEntry, TableRanges, TableRangeEntry, TopProductsResponse } from './WidgetTypes';

// Normalized stat data may be a single value or ranged.
export type NormalizedStatData = {
  data?: number;
  growth?: number;
  ranges?: Record<RangeKey, StatRangeEntry>;
};

export type NormalizedTableData = {
  data?: TopProductsResponse;
  ranges?: Record<RangeKey, TableRangeEntry>;
};

export interface ChartKeys {
  xKey: string;
  yKeys: string[];
}

export type ChartPoint = Record<string, string | number>;

export interface NormalizedChartData {
  data: ChartPoint[];
  keys: ChartKeys;
}

export type NormalizedWidgetData = NormalizedStatData | NormalizedTableData | NormalizedChartData;

export function isChartData(d: NormalizedWidgetData): d is NormalizedChartData {
  return (d as NormalizedChartData).data !== undefined && (d as NormalizedChartData).keys !== undefined && Array.isArray((d as NormalizedChartData).data);
}
