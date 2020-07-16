import React from 'react';
import { render } from '@testing-library/react';
import Chip from './Chip';

test('renders', () => {
  const { getByText } = render(<Chip />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
