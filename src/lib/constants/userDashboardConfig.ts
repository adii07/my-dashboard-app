import { DashboardConfig } from "../types/Dashboard";

export const UserDashboardConfig: DashboardConfig = [
  { id: "u-stat-totalUsers", type: "stat", title: "Total Users", dataSource: "/mocks/users-summary.json", field: "totalUsers" },
  { id: "u-stat-active30d", type: "stat", title: "Active Users (30d)", dataSource: "/mocks/users-summary.json", field: "activeUsers30d" },
  { id: "u-stat-dau", type: "stat", title: "Daily Active Users", dataSource: "/mocks/users-summary.json", field: "dailyActiveUsers" },
  { id: "u-stat-new30d", type: "stat", title: "New Signups (30d)", dataSource: "/mocks/users-summary.json", field: "newSignups30d" },
  { id: "u-stat-churn", type: "stat", title: "Churn Rate", dataSource: "/mocks/users-summary.json", field: "churnRatePercent" },
  { id: "u-stat-avgSession", type: "stat", title: "Avg Session (mins)", dataSource: "/mocks/users-summary.json", field: "avgSessionMins" },
  { id: "u-stat-conversion", type: "stat", title: "Conversion Rate", dataSource: "/mocks/users-summary.json", field: "conversionRatePercent" },
  { id: "u-chart-growth", type: "chart", title: "User Growth (Total Users)", dataSource: "/mocks/user-growth.json" },
  { id: "u-table-top-cities", type: "table", title: "Top Cities (User Distribution)", dataSource: "/mocks/top-cities.json" },
];
