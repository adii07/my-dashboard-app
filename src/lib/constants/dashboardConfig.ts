import { DashboardConfig } from "../types/Dashboard";

export const dashboardConfig: DashboardConfig = [
  {
    id: "1",
    type: "stat",
    title: "Total Users",
    dataSource: "/mocks/usersSummary.json",
  },
  {
    id: "2",
    type: "stat",
    title: "Total Orders",
    dataSource: "/mocks/usersSummary.json",
  },
  {
    id: "3",
    type: "stat",
    title: "Total Successful Orders",
    dataSource: "/mocks/usersSummary.json",
  },
  {
    id: "4",
    type: "stat",
    title: "Total Canceled Orders",
    dataSource: "/mocks/usersSummary.json",
  },
  {
    id: "5",
    type: "stat",
    title: "Total Returned Orders",
    dataSource: "/mocks/usersSummary.json",
  },
  {
    id: "6",
    type: "chart",
    title: "Monthly Sales Overview",
    dataSource: "/mocks/salesSummary.json",
  },
  {
    id: "7",
    type: "table",
    title: "Top Products Sold",
    dataSource: "/mocks/topProducts.json",
  },
  {
    id: "8",
    type: "table",
    title: "Top Returned Items",
    dataSource: "/mocks/topReturns.json",
  },
  {
    id: "9",
    type: "stat",
    title: "New Users",
    dataSource: "/mocks/usersSummary.json",
  },
  {
    id: "10",
    type: "stat",
    title: "Repeating Users",
    dataSource: "/mocks/usersSummary.json",
  },
];
