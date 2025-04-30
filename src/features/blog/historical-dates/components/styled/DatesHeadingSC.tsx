'use client';
import styled from 'styled-components';

export const DatesHeadingSC = styled.div`
  position: absolute;
  top: 20%;
  padding-left: 10%;
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  border-left: 5px solid;
  border-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.blue} 0%, ${theme.colors.purple} 100%) 1`};
`;
