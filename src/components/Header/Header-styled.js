import styled from 'styled-components';
import { CalciteH1 } from 'calcite-react/Elements';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  color: ${({ theme }) => theme.palette.white};
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  line-height: normal;
  padding: 0.5rem 0;
  background: ${({ theme }) => theme.palette.themeColor};
`;

const StyledCalciteH1 = styled(CalciteH1)`
  font-family: ${({ theme }) => theme.type.accentFamily};
  color: ${({ theme }) => theme.palette.white};
  font-size: 2rem;
  line-height: inherit;
  text-align: center;
  margin: 0;

  a {
    color: ${({ theme }) => theme.palette.white};
    text-decoration: none;
  }
`;

const SearchWrapper = styled.div`
  background: ${({ theme }) => theme.palette.white};
  width: 16rem;
  margin-inline-start: 1rem;
  text-align: start;

  @media (max-width: 575px) {
    width: 100%;
  }

  input {
    border: 0;
    margin: 0;
  }
`;

const UserWrapper = styled.div`
  text-align: end;
  margin-inline-end: 1rem;
`;

export { StyledHeader, StyledCalciteH1, SearchWrapper, UserWrapper };
