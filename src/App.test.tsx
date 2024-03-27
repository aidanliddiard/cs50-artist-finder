import React from 'react';
import { render, screen } from '@testing-library/react';
import Artists from './views/Artists';
// import App from './App';

test('renders learn react link', () => {
  render(<Artists />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
