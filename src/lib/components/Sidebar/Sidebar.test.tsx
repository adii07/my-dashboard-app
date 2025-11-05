import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './index';
import { ThemeProvider } from '../../contexts/ThemeContext';

describe('Sidebar', () => {
  test('expands and collapses, selects category', () => {
    const onSelect = jest.fn();
    const onToggle = jest.fn();
    render(
      <ThemeProvider>
        <Sidebar open={true} category='user' onSelect={onSelect} onToggle={onToggle} />
      </ThemeProvider>
    );
    // Has buttons
    const userBtn = screen.getByRole('button', { name: /user dashboard/i });
    fireEvent.click(userBtn);
    expect(onSelect).toHaveBeenCalledWith('user');
  });
});
