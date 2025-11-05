import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DashboardItem from './index';

beforeEach(() => {
  (global as any).fetch = jest.fn((url: string) => {
    if (url.includes('stat.json')) {
      return Promise.resolve({ json: () => Promise.resolve({ data: 42, growth: 5 }) });
    }
    if (url.includes('table.json')) {
      return Promise.resolve({ json: () => Promise.resolve({ data: { columns: ['col'], rows: [{ col: 'v' }] } }) });
    }
    if (url.includes('chart.json')) {
      return Promise.resolve({ json: () => Promise.resolve({ data: { data: [{ month: 'Jan', itemsSold: 1 }], keys: { xKey: 'month', yKeys: ['itemsSold'] } } }) });
    }
    return Promise.resolve({ json: () => Promise.resolve({}) });
  });
});

describe('DashboardItem', () => {
  test('renders stat widget after fetch', async () => {
    render(<DashboardItem id='s1' type='stat' title='Stat' dataSource='/mocks/stat.json' />);
    await waitFor(() => expect(screen.getByText('42')).toBeInTheDocument());
  });
});
