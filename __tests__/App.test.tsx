import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, } from '@testing-library/react';
import { App } from '../src/App';


describe('<App/>', () => {
  it('should have a form', () => {
    render(<App />);
    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
  });
});
