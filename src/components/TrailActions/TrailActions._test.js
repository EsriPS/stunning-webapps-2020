import React from 'react';
import { render } from '@testing-library/react';
import TrailActions from './TrailActions';

test('renders', () => {
  const { getByText } = render(<TrailActions />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
