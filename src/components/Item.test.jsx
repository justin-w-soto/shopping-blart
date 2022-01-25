import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const item = {
  id: 1,
  text: 'yellow',
};

beforeEach(() => {
  render(<App />);
});

it('should render a list item', async () => {
  const update = await screen.findAllByRole('button', { name: 'updating' });
  userEvent.click(update[0]);
  const input = await screen.findAllByRole('textbox');
  waitFor(async () => {
    userEvent.type(input[0], 'yellow');
    const updateItemInput = await screen.findByText('yellow');
    expect(updateItemInput).toBeInTheDocument();
  });

  expect(update[0]).toBeInTheDocument();
});