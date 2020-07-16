import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders', () => {
  const { getByText } = render(<Sidebar />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
