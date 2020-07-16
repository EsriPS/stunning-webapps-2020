import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
