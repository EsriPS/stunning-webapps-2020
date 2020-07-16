import React from 'react';
import { render } from '@testing-library/react';
import TrailSearch from './TrailSearch';

test('renders', () => {
  const { getByText } = render(<TrailSearch />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
