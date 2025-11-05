import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './index';
import { RangeProvider } from '../../context/RangeContext';

jest.mock('../DashboardItem', () => (props: any) => <div data-testid='widget' data-type={props.type}>{props.title}</div>);

describe('Dashboard', () => {
  test('renders widgets (mocked)', () => {
    render(<RangeProvider><Dashboard category='sales' /></RangeProvider>);
    expect(screen.getAllByTestId('widget').length).toBeGreaterThan(0);
  });
});
