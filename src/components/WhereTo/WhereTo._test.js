import React from 'react';
import { render } from '@testing-library/react';
import WhereTo from './WhereTo';

test('renders component', () => {
  const { getByTestId } = render(<WhereTo />);
  const component = getByTestId('WhereTo');
  expect(component).toBeInTheDocument();
});
