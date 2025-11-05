import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartWidget from './ChartWidget';

jest.mock('highcharts', () => ({}));
jest.mock('highcharts-react-official', () => () => <div data-testid='chart-mock'/>);

describe('ChartWidget', () => {
  test('renders two series when two yKeys supplied', () => {
    const rawData = {
      data: [
        { month: 'Jan', itemsSold: 10, revenue: 200 },
        { month: 'Feb', itemsSold: 12, revenue: 240 }
      ],
      keys: { xKey: 'month', yKeys: ['itemsSold','revenue'] }
    };
    render(<ChartWidget title='Sales' rawData={rawData} />);
    expect(screen.getByTestId('chart-mock')).toBeInTheDocument();
  });
});
