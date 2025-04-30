'use client';
import styled from 'styled-components';

export const SideLinesOverlaySC = styled.div`
  &::before,
  &::after {
    content: '';
    position: absolute;
    opacity: 0.2;
    background-color: ${({ theme }) =>
      theme.colors.independence}; /* Line color */
    pointer-events: none;
  }

  /* Left line */
  &::before {
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
  }

  /* Right line */
  &::after {
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      display: none; /* Hide lines on smaller screens */
    }
  }
`;
