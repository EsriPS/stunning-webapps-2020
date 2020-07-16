import React from 'react';
import { render } from '@testing-library/react';
import MapPage from './MapPage';

test('renders component', () => {
  const { getByTestId } = render(<MapPage />);
  const component = getByTestId('MapPage');
  expect(component).toBeInTheDocument();
});
