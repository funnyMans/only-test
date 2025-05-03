'use client';
import styled from 'styled-components';

export const GsapSpinnerBtnSC = styled.button<{ $handler: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: ${({ theme }) => theme.text.secondary + '40'} 2px solid;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  & svg {
    position: relative;
    color: ${({ theme }) => theme.text.secondary};
    top: 1px;
    left: ${({ $handler }) => ($handler === 'prev' ? '-3px' : '3px')};
    fill: ${({ theme }) => theme.text.primary + '70'};
    stroke: ${({ theme }) => theme.text.primary + '70'};
  }
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    border-color: ${({ theme }) => theme.text.blue + '80'};
    box-shadow: ${({ theme }) =>
      `0 2px 2px 2px ${theme.text.secondary + '40'}`};
    & svg {
      fill: ${({ theme }) => theme.text.blue};
      stroke: ${({ theme }) => theme.text.blue};
    }
  }
  @media (max-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;
