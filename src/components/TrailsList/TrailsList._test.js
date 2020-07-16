import React from 'react';
import { render } from '@testing-library/react';
import TrailsList from './TrailsList';

test('renders', () => {
  const { getByText } = render(<TrailsList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
