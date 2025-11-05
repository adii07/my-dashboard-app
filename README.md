# My Dashboard App

Responsive, themeable analytics dashboard with range-based stats, tables, and charts (Highcharts) plus loading skeletons and test coverage.

## Features
- Light / Dark theme toggle (CSS variables)
- Sidebar category switching (Sales vs User dashboards)
- Range filter (7d / 1m / 1y / All) driving stat & table widgets
- Multi‑series line chart (items sold + revenue or user metrics)
- Accessible loading skeletons for stat / table / chart
- Error-safe data fetching structure (extensible)
- Jest + React Testing Library component tests

## Demo
Watch a short demo of the dashboard here:

https://drive.google.com/file/d/1ZP1dRWsFWe59jDkn9siujGvbGW8hGjtL/view?usp=drive_link

If the link does not open directly, copy & paste into your browser. The video showcases theme toggling, range filtering, multi-series chart behavior, and loading skeleton transitions.

## Live Site
Access the deployed application here:

https://my-dashboard-app-woad.vercel.app/

The live site reflects the latest main branch: theme toggle, responsive layout, range-driven stats/tables, multi-series charts, and skeleton loading states.

## Quick Start
Install deps and run the dev server:

```bash
npm install
npm start
```

Run tests:

```bash
npm test
```

Build production bundle:

```bash
npm run build
```

## Project Structure (high level)
```
src/
	App.tsx
	index.css
	lib/
		components/
			Sidebar/
			Dashboard/
			DashboardItem/
			Widgets/ (StatWidget, TableWidget, ChartWidget)
			Filter/
			ToggleTheme/
			Loading/ (Skeleton)
		context/ (RangeContext)
		contexts/ (ThemeContext)
		types/ (WidgetTypes, Theme, Filter)
public/mocks/ (dummy JSON data)
```

## Data Conventions
- Stat & table widgets may supply `ranges` keyed by the active range.
- Charts expose `{ data: [...], keys: { xKey, yKeys[] } }` enabling multi‑series rendering.

## Testing
Component tests cover:
- Theme toggle behavior
- Sidebar interactions
- StatWidget range rendering
- TableWidget basic rendering
- ChartWidget mounting (Highcharts mocked)
- Dashboard composition (DashboardItem mocked)
- DashboardItem fetch integration (fetch mocked)
- Filter range change

## Accessibility
- Skeletons use `aria-busy` and visually hidden text for screen readers.
- Table headers are semantic; rows focusable for keyboard review (tabIndex applied in implementation).

## AI Assistance Disclosure
Portions of this project were created or refined with the assistance of an AI coding tool. Human review and adjustments were performed for correctness, readability, and security. Specifically, AI assistance was used for:

| Area | Description of AI Contribution |
|------|--------------------------------|
| Test cases | Generated initial Jest + React Testing Library tests for widgets, sidebar, filter, theme toggle, dashboard composition, and chart (with Highcharts mock). |
| Config file error | Helped diagnose and resolve a configuration/type issue (e.g., ensuring module declarations and fetch mocking). |
| custom.d.ts (styles.d.ts) | Authored the declaration file (`src/styles.d.ts`, originally referenced as `custom.d.ts`) to allow importing CSS / CSS Modules without TypeScript errors. |
| Dummy data | Produced the shape and sample values for mock JSON in `public/mocks/` (sales summary, user growth, top products/returns, user stats). |
| Loading state & skeleton | Implemented reusable skeleton component with shimmer animation and integrated per widget type. |
| Chart layout & Highcharts integration | Accelerated first-time Highcharts setup: multi-series configuration, dynamic detection of series keys, legend & shared tooltip behavior. |

If any of these generated sections require further clarification or tailoring, feel free to refine them.


## Scripts (CRA Defaults)
The standard Create React App scripts remain available:

### `npm start`
Dev server at http://localhost:3000

### `npm test`
Interactive watch mode.

### `npm run build`
Optimized production build in `build/`.

### `npm run eject`
Ejects configuration (one‑way). Only if deep customization is required.

## License
Add a license here if you intend to distribute (e.g., MIT). Currently unspecified.

---
Generated with partial AI assistance (see disclosure above). Review recommended before production use.
