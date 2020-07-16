import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

test('renders component', () => {
  const { getByTestId } = render(<HomePage />);
  const component = getByTestId('HomePage');
  expect(component).toBeInTheDocument();
});
