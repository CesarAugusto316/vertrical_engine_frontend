import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, } from '@testing-library/react';
import { App } from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import { MedicineProvider } from '../src/context/MedicineProvider';
import { mockServer } from '../src/mocks/mockServer';


beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe('<App/> initial render', () => {
  beforeEach(() => {
    render(
      <MedicineProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MedicineProvider>
    );
  });

  it('should have a form', () => {
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('should a navigation with a vertrical-logo', () => {
    const navbar = screen.getByRole('navigation');
    const logo = screen.getByAltText('vertrical-logo');

    expect(navbar).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  test('<Home/> should have a results heading', () => {
    const results = screen.getByRole('heading', { name: /results/i });

    expect(results).toBeInTheDocument();
  });

  test('<Home/> should have a Medicines List container', () => {
    const list = screen.getByRole('list', { description: /medicines list/i });

    expect(list).toBeInTheDocument();
  });

  test('<Navbar> should have a "search medicine" placeholder', () => {
    const textBox = screen.getByPlaceholderText(/search medicine.../i);

    expect(textBox).toBeInTheDocument();
  });
});
