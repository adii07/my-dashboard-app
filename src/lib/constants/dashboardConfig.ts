import { DashboardConfig } from "../types/Dashboard";

export const dashboardConfig: DashboardConfig = [
  {
    id: "1",
    type: "stat",
    title: "Total Users",
    dataSource: "/api/users/summary",
  },
  {
    id: "2",
    type: "chart",
    title: "Monthly Sales",
    dataSource: "/api/sales/monthly",
  },
  {
    id: "3",
    type: "table",
    title: "Top Products",
    dataSource: "/api/products/top",
  },
];
