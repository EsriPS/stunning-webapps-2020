import React from 'react';
import { render } from '@testing-library/react';
import FilterSelect from './FilterSelect';

test('renders', () => {
  const { getByText } = render(<FilterSelect />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
