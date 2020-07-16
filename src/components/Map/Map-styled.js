import styled, { keyframes } from 'styled-components';

const StyledMap = styled.div`
  height: 100%;
  width: 100%;
`;

const load = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const draw = keyframes`
  0% {
    stroke-dashoffset: 670px;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const rotate = keyframes`
  from {
    left: -265px;
  }
  to {
    left: 0px;
  }
`;

const StyledMapLoader = styled.div`
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.palette.themeColor};
  border-right-color: ${({ theme }) => theme.palette.themeColor};
  width: 125px;
  height: 125px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${load} 2s linear infinite;
  background-color: ${({ theme }) => theme.palette.white};
  z-index: 1;
`;

const LoaderGlobeWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  width: 125px;
  height: 125px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  svg {
    position: absolute;
    fill-opacity: 0;
    stroke: ${({ theme }) => theme.palette.themeColor};
    stroke-opacity: 1;
    stroke-width: 2;
    stroke-dasharray: 670px;
    animation: ${draw} 5s infinite ease-in-out alternate,
      ${rotate} 5s -2.5s infinite ease-in-out reverse;
  }
`;

export { StyledMap, StyledMapLoader, LoaderGlobeWrapper };
