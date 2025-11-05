export type WidgetType = "stat" | "chart" | "table";

export interface WidgetConfig {
  id: string;
  type: WidgetType;
  title: string;
  dataSource: string;
  field?: string; // optional key for stat widgets when source JSON is a summary object
}

export type DashboardConfig = WidgetConfig[];


export type DashboardConfigTypes={
  category: 'user' | 'sales'
};