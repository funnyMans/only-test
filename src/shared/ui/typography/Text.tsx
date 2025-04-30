import styled from 'styled-components';

export const TextSC = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[16]};
  color: ${({ theme }) => theme.text.inverse};
`;
/* &:hover {
    color: ${({ theme }) => theme.text.primary};
  } */

export const PargraphSC = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[20]};
`;
