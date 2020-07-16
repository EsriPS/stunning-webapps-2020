import React from "react";
import { BrowserRouter } from 'react-router-dom';
import CalciteThemeProvider from "calcite-react/CalciteThemeProvider";
import { Theme } from '../src/theme';

const ThemeDecorator = (storyFn) => (
  <BrowserRouter>
    <CalciteThemeProvider theme={Theme}>{storyFn()}</CalciteThemeProvider>
  </BrowserRouter>
);

export default ThemeDecorator;
