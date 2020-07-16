import React from 'react';
import { render } from '@testing-library/react';
import SubHeader from './SubHeader';

test('renders', () => {
  const { getByText } = render(<SubHeader />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
