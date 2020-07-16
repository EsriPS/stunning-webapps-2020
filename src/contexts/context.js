import { createContext } from 'react';

export const SelectedContext = createContext({
  value: null,
  setCurrentValue: () => {},
});
