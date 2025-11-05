import React from 'react';
import { render, screen } from '@testing-library/react';
import TableWidget from './TableWidget';
import { RangeProvider } from '../../contexts/RangeContext';

describe('TableWidget', () => {
  const rawData = {
    data: {
      columns: ['productId','name','unitsSold'],
      rows: [
        { productId: 'p1', name: 'Widget', unitsSold: 10 },
        { productId: 'p2', name: 'Gadget', unitsSold: 5 }
      ]
    }
  };
  test('renders rows and columns', () => {
    render(<RangeProvider><TableWidget title='Top Products' rawData={rawData as any} /></RangeProvider>);
    expect(screen.getByText('Widget')).toBeInTheDocument();
    expect(screen.getByText('Gadget')).toBeInTheDocument();
  });
});
