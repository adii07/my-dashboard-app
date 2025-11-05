import React from 'react';
import { render, screen } from '@testing-library/react';
import StatWidget from './StatWidget';
import { RangeProvider } from '../../contexts/RangeContext';

describe('StatWidget', () => {
  const ranges = {
    '7d': { data: 10, growth: 5 },
    '1m': { data: 100, growth: 10 },
    '1y': { data: 1000, growth: -2 },
    'all': { data: 5000 }
  };
  test('renders current 1m default range value', () => {
    render(<RangeProvider><StatWidget title='Users' rawData={{ ranges }} /></RangeProvider>);
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('+10.0%')).toBeInTheDocument();
  });
});
