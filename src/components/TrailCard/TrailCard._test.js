import React from 'react';
import { render } from '@testing-library/react';
import TrailCard from './TrailCard';

test('renders', () => {
  const { getByText } = render(<TrailCard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
