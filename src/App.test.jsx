import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const setup = () => {
  render(<App />);
  const addButton = screen.getByRole('button', { name: /add module/i });
  return { addButton };
};

describe('App', () => {
  it('renders with no experiment modules', () => {
    const { addButton } = setup();
    expect(screen.getByText(/there are no experiment modules at the moment/i)).toBeInTheDocument();
  });

  it('can add experiment modules', async () => {
    const { addButton } = setup();
    fireEvent.click(addButton);
    expect(screen.getAllByTestId('experiment-module').length).toBe(1);
    fireEvent.click(addButton);
    expect(screen.getAllByTestId('experiment-module').length).toBe(2); 
  });

});
