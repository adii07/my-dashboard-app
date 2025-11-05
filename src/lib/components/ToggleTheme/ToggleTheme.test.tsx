import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './index';
import { ThemeProvider } from '../../contexts/ThemeContext';

describe('ThemeToggle', () => {
  test('toggles between light and dark', () => {
    render(<ThemeProvider><ThemeToggle /></ThemeProvider>);
    const btn = screen.getByRole('button', { name: /switch to dark theme/i });
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    fireEvent.click(btn);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
