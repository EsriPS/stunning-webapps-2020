import styled, { css } from 'styled-components';
import Card, { CardTitle, CardContent, CardImage } from 'calcite-react/Card';
import { CalciteH2 } from 'calcite-react/Elements';
import Label from 'calcite-react/Label';

const StyledCard = styled(Card)`
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.palette.background};
  }
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: 1.2rem;
  margin: 0 0 0.35rem 0;
`;

const StyledCardContent = styled(CardContent)`
  padding: 0.55rem 1rem;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;

  ${(props) =>
    props.large &&
    css`
      margin: 1.55rem 0;
    `};
`;

const IconWrapper = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 5px;
  padding: 5px;
  margin-inline-end: 0.3rem;
  background: ${({ theme }) => theme.palette.semantic.inactive};

  ${(props) =>
    props.isActive &&
    css`
      background: ${({ theme }) => theme.palette.semantic.active};
    `};

  ${(props) =>
    props.large &&
    css`
      width: 2rem;
      height: 2rem;
    `};

  svg {
    fill: ${({ theme }) => theme.palette.white};
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DistanceWrapper = styled.div`
  margin-inline-start: 1.55rem;
  svg {
    color: #17231e38;
  }
`;

const ElevationWrapper = styled.div`
  margin-inline-start: 1.55rem;
  svg {
    color: #17231e38;
  }
`;

const StyledTrailDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const Title = styled(CalciteH2)`
  margin: 1.55rem 0 0.775rem 0;
`;

const ContentWrapper = styled.div`
  margin: 1.55rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  button {
    margin-inline-start: 0.55rem;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLabel = styled(Label)`
  align-self: center;
  padding: 0.275rem 1.55rem;
`;

const StyledCardImage = styled(CardImage)`
  img {
    display: block;
    max-height: 22rem;
    object-fit: cover;
  }
`;

export {
  StyledCard,
  StyledCardTitle,
  StyledCardContent,
  StyledTrailDetails,
  IconsWrapper,
  IconWrapper,
  StatsWrapper,
  DistanceWrapper,
  ElevationWrapper,
  ImageWrapper,
  Title,
  ButtonWrapper,
  ContentWrapper,
  SubTitleWrapper,
  StyledLabel,
  StyledCardImage,
};
