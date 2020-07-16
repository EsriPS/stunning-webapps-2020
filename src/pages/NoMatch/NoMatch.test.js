import React from 'react';
import { render } from '@testing-library/react';
import NoMatch from './NoMatch';

test('renders component', () => {
  const { getByTestId } = render(<NoMatch />);
  const component = getByTestId('NoMatch');
  expect(component).toBeInTheDocument();
});
