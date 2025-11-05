import React, { useState } from 'react';
import Dashboard from "./lib/components/Dashboard";
import ThemeToggle from "./lib/components/ToggleTheme";
import { RangeProvider } from './lib/context/RangeContext';
import Sidebar from './lib/components/Sidebar';
import sidebarStyles from './lib/components/Sidebar/index.module.css';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<'user' | 'sales'>('user');

  const contentOffsetClass = open ? sidebarStyles.mainContentOffsetExpanded : sidebarStyles.mainContentOffsetCollapsed;
  return (
    <RangeProvider>
      <div className="App" style={{ display: 'flex' }}>
        <Sidebar
          open={open}
          category={category}
          onSelect={setCategory}
          onToggle={() => setOpen(o => !o)}
        />
        <div className={contentOffsetClass} style={{ flex: 1, padding: '16px', minWidth: 0 }}>
          <ThemeToggle />
          <Dashboard category={category} />
        </div>
      </div>
    </RangeProvider>
  );
}

export default App;
