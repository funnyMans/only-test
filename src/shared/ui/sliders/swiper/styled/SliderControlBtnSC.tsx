'use client';
import styled from 'styled-components';

export const SliderControlBtnSC = styled.button`
  margin-right: 40px;
  margin-left: 40px;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg.transparent};
  color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  box-shadow: ${({ theme }) => `0px 0px 15px 15px ${theme.colors.blue}40`};
  transition: all 0.2s ease-in-out;
  z-index: 2;
  &::after {
    font-size: ${({ theme }) => theme.fontSizes[16]};
  }
  &:disabled {
    opacity: 0;
  }
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    border-color: ${({ theme }) => theme.text.blue + '80'};
    box-shadow: ${({ theme }) =>
      `0 2px 2px 2px ${theme.text.secondary + '40'}`};
    /* transform: scale(1.3); */
  }
`;
