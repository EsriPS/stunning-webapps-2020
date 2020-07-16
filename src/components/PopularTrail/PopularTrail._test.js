import React from 'react';
import { render } from '@testing-library/react';
import PopularTrail from './PopularTrail';

test('renders component', () => {
  const { getByTestId } = render(<PopularTrail />);
  const component = getByTestId('PopularTrail');
  expect(component).toBeInTheDocument();
});
