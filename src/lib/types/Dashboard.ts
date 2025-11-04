export type WidgetType = "stat" | "chart" | "table";

export interface WidgetConfig {
  id: string;
  type: WidgetType;
  title: string;
  dataSource: string;
}

export type DashboardConfig = WidgetConfig[];
