import React from 'react';
import { render } from '@testing-library/react';
import User from './User';

test('renders', () => {
  const { getByText } = render(<User />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
