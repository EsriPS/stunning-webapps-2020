import styled from 'styled-components';
import { CalciteH2 } from 'calcite-react/Elements';

import { FormControl } from 'calcite-react/Form';

const StyledWhereTo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem;
  @media (max-width: 575px) {
    margin: 1.5rem;
  }
`;

const StyledCalciteH2 = styled(CalciteH2)`
  @media (max-width: 575px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 0 0 0.5rem 0;
  }
`;

const StyledSearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
  align-items: center;
`;

export {
  StyledWhereTo,
  StyledSearchContainer,
  StyledFormControl,
  StyledCalciteH2,
};
