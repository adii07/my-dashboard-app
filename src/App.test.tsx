import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './lib/contexts/ThemeContext';

jest.mock('highcharts', () => ({}));
jest.mock('highcharts-react-official', () => () => <div data-testid="chart-mock" />);

function renderWithTheme() {
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

test('toggles data-theme attribute from light to dark', () => {
  renderWithTheme();
  const toggleBtn = screen.getByRole('button', { name: /Switch to dark theme/i });
  expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  fireEvent.click(toggleBtn);
  expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
});
