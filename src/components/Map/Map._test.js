import React from 'react';
import { render } from '@testing-library/react';
import Map from './Map';

test('renders', () => {
  const { getByText } = render(<Map />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
