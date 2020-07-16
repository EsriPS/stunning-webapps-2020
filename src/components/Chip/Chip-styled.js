import styled, { css } from 'styled-components';

const StyledChip = styled.span`
  padding: 0.1rem 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.white};
  ${(props) =>
    props.difficulty === 'easy' &&
    css`
      background: ${({ theme }) => theme.palette.semantic.easy};
    `};
  ${(props) =>
    props.difficulty === 'moderate' &&
    css`
      background: ${({ theme }) => theme.palette.semantic.moderate};
    `};
  ${(props) =>
    props.difficulty === 'difficult' &&
    css`
      background: ${({ theme }) => theme.palette.semantic.difficult};
    `};
`;

export { StyledChip };
