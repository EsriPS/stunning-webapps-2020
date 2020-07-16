import React from "react";
import CalciteThemeProvider from "calcite-react/CalciteThemeProvider";
import { Theme } from '../src/theme';

const ThemeDecorator = (storyFn) => (
  <CalciteThemeProvider theme={Theme}>{storyFn()}</CalciteThemeProvider>
);

export default ThemeDecorator;
