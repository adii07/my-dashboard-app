// src/lib/types/users.ts
export interface UsersSummary {
  totalUsers: number;
  activeUsers30d: number;
  dailyActiveUsers: number;
  newSignups30d: number;
  churnRatePercent: number; // e.g. 2.3
  avgSessionMins: number;
  conversionRatePercent: number; // e.g. 4.5
}

export interface UserGrowthPoint {
  month: string;
  totalUsers: number; // cumulative total by month
  newUsers: number; // new users in that month
}

export interface CityRow {
  city: string;
  country?: string;
  userCount: number;
  percent: string; // "12.3%"
}

export interface TableData {
  columns: string[]; // e.g. ["city","country","userCount","percent"]
  rows: CityRow[];
}
