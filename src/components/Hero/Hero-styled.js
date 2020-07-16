import styled from 'styled-components';
import HeroImage from 'assets/hiking_cropped.jpg';
import { CalciteH1, CalciteH2 } from 'calcite-react/Elements';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  min-height: 700px;
  width: 100%;
  background: ${({ theme }) => theme.palette.themeColor};
  background-image: url(${() => HeroImage});
  background-attachment: fixed;
  background-position: top;
  background-repeat: repeat-x;
`;

const StyledUser = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 500px;
  text-align: right;
`;

const StyledHeroTitle = styled.div`
  margin: 6rem auto 1rem;
  text-align: center;
  @media (max-width: 575px) {
    margin: 3rem auto 1rem;
  }
`;

const StyledCalciteH1 = styled(CalciteH1)`
  font-family: ${({ theme }) => theme.type.accentFamily};
  color: white;
  font-size: 5rem;
  font-weight: bold;
  line-height: 5rem;
  @media (max-width: 575px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

const StyledCalciteH2 = styled(CalciteH2)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.white};
  text-shadow: 0 0 3px ${({ theme }) => theme.palette.themeColor};
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.type.accentFamily};
  @media (max-width: 575px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

const StyledHeroContainer = styled.div`
  display: flex;
  flex: 0 2 auto;
  flex-direction: column;
  width: 45rem;
  background: #ffffffef;
  box-shadow: 0 0 8px black;
  color: black;
  @media (max-width: 575px) {
    margin: 0 1rem;
    width: inherit;
  }
`;

export {
  StyledHero,
  StyledUser,
  StyledCalciteH1,
  StyledCalciteH2,
  StyledHeroContainer,
  StyledHeroTitle,
};
