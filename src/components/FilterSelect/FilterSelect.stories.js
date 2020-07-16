import React from 'react';
import FilterSelect from '.';

const difficultyOptions = [
  { value: '0', label: 'Easy' },
  { value: '1', label: 'Medium' },
  { value: '2', label: 'Hard' },
];

export default {
  title: 'FilterSelect',
  component: FilterSelect,
};

export const Default = () => (
  <FilterSelect options={difficultyOptions}>FilterSelect</FilterSelect>
);
