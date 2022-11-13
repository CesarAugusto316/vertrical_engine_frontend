import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Search, MedicinesList } from '../src/components/';
import { BrowserRouter } from 'react-router-dom';
import { MedicineProvider } from '../src/context/MedicineProvider';
import { mockServer } from '../src/mocks/mockServer';


beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe('<Search/> initial render', () => {
  beforeEach(() => {
    render(
      <MedicineProvider>
        <BrowserRouter>
          <Search />
          <MedicinesList />
        </BrowserRouter>
      </MedicineProvider>
    );
  });

  it('should have a input search', () => {
    const search = screen.getByRole('search');
    expect(search).toBeInTheDocument();
  });

  it('should render a button', () => {
    expect(screen
      .getByRole('button'))
      .toBeInTheDocument();
  });

  it('should render mocked medicines data from API', async () => {
    const searchInput = screen.getByRole('search');
    const userEv = user.setup();

    act(() => {
      userEv.type(searchInput, 'a, {enter}');
    });

    (await screen.findAllByRole('img', { name: /test medicine/i })).forEach(img => {
      // screen.debug();
      expect(img).toBeInTheDocument();
    });
  });
});
