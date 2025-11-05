import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './index';
import { RangeProvider } from '../../contexts/RangeContext';

describe('Filter', () => {
  test('changes selected range', () => {
    render(<RangeProvider><Filter /></RangeProvider>);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '7d' } });
    expect((select as HTMLSelectElement).value).toBe('7d');
  });
});
