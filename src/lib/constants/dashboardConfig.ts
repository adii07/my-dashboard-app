import { DashboardConfig } from "../types/Dashboard";

export const dashboardConfig: DashboardConfig = [
  {
    id: "1",
    type: "stat",
    title: "Total Users",
    dataSource: "/mocks/totalUser.json",
  },
  {
    id: "2",
    type: "stat",
    title: "Total Orders",
    dataSource: "/mocks/totalItems.json",
  },
  {
    id: "3",
    type: "stat",
    title: "Total Successful Orders",
    dataSource: "/mocks/successfulOrders.json",
  },
  {
    id: "4",
    type: "stat",
    title: "Total Returned Orders",
    dataSource: "/mocks/returnedOrders.json",
  },
  {
    id: "5",
    type: "chart",
    title: "Monthly Sales Overview",
    dataSource: "/mocks/salesSummary.json",
  },
  {
    id: "6",
    type: "table",
    title: "Top Products Sold",
    dataSource: "/mocks/topProducts.json",
  },
  {
    id: "7",
    type: "table",
    title: "Top Returned Items",
    dataSource: "/mocks/topReturns.json",
  },
  {
    id: "8",
    type: "stat",
    title: "New Users",
    dataSource: "/mocks/newUsers.json",
  },
  {
    id: "9",
    type: "stat",
    title: "Repeating Users",
    dataSource: "/mocks/repeatingUsers.json",
  },
];
