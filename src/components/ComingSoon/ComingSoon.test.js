import React from 'react';
import { render } from '@testing-library/react';
import ComingSoon from './ComingSoon';

test('renders Welcome to ArcGIS Assistant', () => {
  const { getByText } = render(<ComingSoon />);
  const linkElement = getByText(/Welcome to ArcGIS Assistant/i);
  expect(linkElement).toBeInTheDocument();
});
