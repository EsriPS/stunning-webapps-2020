import styled from 'styled-components';
import { FormControl, FormControlLabel } from 'calcite-react/Form';

const StyledFilter = styled.div`
  display: flex;
`;

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  font-size: 0.8rem;
  text-transform: capitalize;
`;

export { StyledFilter, StyledFormControl, StyledFormControlLabel };
