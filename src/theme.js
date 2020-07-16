import { CalciteTheme } from 'calcite-react/CalciteThemeProvider';
import { unitCalc } from 'calcite-react/utils/helpers';

const themeColor = '#515E29';
const themeColorHighlight = '#798146';
const backgroundColor = '#515E290d';
const primaryFont =
  '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif';
const accentFont = '"Courgette", cursive';

export const Theme = {
  ...CalciteTheme,
  palette: {
    ...CalciteTheme.palette,
    themeColor: themeColor,
    themeColorHighlight: themeColorHighlight,
    background: backgroundColor,
    blue: themeColor,
    lightBlue: themeColorHighlight,
    darkBlue: themeColor,
    semantic: {
      difficult: '#17231E',
      moderate: '#5C649C',
      easy: '#798146',
      active: '#515E29',
      inactive: '#8B918F',
    },
  },
  type: {
    ...CalciteTheme.type,
    avenirFamily: primaryFont,
    accentFamily: accentFont,
  },
  panelMargin: unitCalc(CalciteTheme.baseline, 2, '/'),
  panelPadding: unitCalc(CalciteTheme.baseline, 2, '/'),
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
  border: '1px solid #eaeaea',
};
