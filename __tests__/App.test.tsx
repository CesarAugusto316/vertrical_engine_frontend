import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, } from '@testing-library/react';
import { App } from '../src/App';
import { mockServer } from '../src/mocks/mockServer';


beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe('<App/>', () => {
  it('should have a form', () => {
    render(<App />);
    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
  });
});
