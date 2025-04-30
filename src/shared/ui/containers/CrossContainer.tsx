'use client';
import styled from 'styled-components';

export const CenterCrossContainerSC = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    opacity: 0.2;
    background-color: ${({ theme }) =>
      theme.colors.independence}; /* Line color */
    pointer-events: none;
    z-index: 0;
  }

  /* Vertical line */
  &::before {
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    transform: translateX(-50%);
  }

  /* Horizontal line */
  &::after {
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      display: none;
    }
  }
`;
