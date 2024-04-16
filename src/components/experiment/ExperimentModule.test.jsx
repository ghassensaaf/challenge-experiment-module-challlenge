import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperimentModule from './ExperimentModule'; 

describe('ExperimentModule', () => {
  it('renders without crashing', () => {
    render(<ExperimentModule expModule={{ name: 'Test Module' }} />);
    expect(screen.getByTestId('experiment-module')).toBeInTheDocument();
  });

  it('toggles the visibility of iterations', () => {
    render(<ExperimentModule expModule={{ name: 'Test Module' }} />);
    const toggleButton = screen.getByText('Test Module');
    fireEvent.click(toggleButton);
    expect(screen.getByText(/this experiment module has no iteration start by adding one/i)).toBeInTheDocument();
  });  

});
