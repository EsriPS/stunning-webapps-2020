import styled from 'styled-components';

const HomePageLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 2;
`;

const PopularTrailsContainer = styled.section`
  display: grid;
  grid-gap: 1rem;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    grid-template-columns: 1fr;
  }
  
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  max-width: 100rem;
  margin: 4rem auto 0;
`;

export { HomePageLayout, PopularTrailsContainer };
