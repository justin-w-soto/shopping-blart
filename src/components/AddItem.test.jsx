import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'

beforeEach(() => {
  render(<App />);
});

it('should add a new thing to shopping list', async () => {
  const input = await screen.findAllByRole('textbox');
  userEvent.type(input[0], 'yellow');

  expect(input[0]).toBeInTheDocument();
});