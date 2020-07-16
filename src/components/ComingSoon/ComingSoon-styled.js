import styled from 'styled-components';

const StyledComingSoon = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  text-align: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.themeColor};
`;

const StyledIntro = styled.div`
  flex: 1 0 300px;
  height: 100px;
  padding: 20px;
  color: white;
  font-size: 3em;
  font-weight: lighter;

  img {
    margin: 50px;
    height: 50px;
  }
`;

export { StyledComingSoon, StyledIntro };
