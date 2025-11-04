import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './lib/contexts/ThemeContext';

function renderWithTheme() {
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

test('toggles data-theme attribute from light to dark', () => {
  renderWithTheme();
  const toggleBtn = screen.getByRole('button', { name: /toggle theme/i });
  // initial theme should be light
  expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  fireEvent.click(toggleBtn);
  expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
});
