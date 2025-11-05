import React, { createContext, useContext, useState, ReactNode } from 'react';
import { RangeKey } from '../types/Filter';

interface RangeContextValue {
  range: RangeKey;
  setRange: (r: RangeKey) => void;
}

const RangeContext = createContext<RangeContextValue | undefined>(undefined);

export const RangeProvider = ({ children }: { children: ReactNode }) => {
  const [range, setRange] = useState<RangeKey>('1m');
  return <RangeContext.Provider value={{ range, setRange }}>{children}</RangeContext.Provider>;
};

export const useRange = () => {
  const ctx = useContext(RangeContext);
  if (!ctx) throw new Error('useRange must be used within RangeProvider');
  return ctx;
};