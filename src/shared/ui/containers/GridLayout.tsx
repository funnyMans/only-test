'use client';
import styled from 'styled-components';

export const GridLayoutSC = styled.div<{
  $columns?: string;
  $layoutSiftAt?: string;
}>`
  display: grid;
  grid-template-columns: ${({ $columns }) =>
    $columns ||
    `minmax(32px, 2fr) 10fr minmax(16px, 1fr)`}; /* Left, Center, Right */
  grid-template-rows: 100vh; /* Full screen height */
  grid-template-areas: 'leftAside mainContent  rightAside.'; /* Centered content with empty sides */
  height: 100vh;
  width: 100vw; /* Make sure it fills the full viewport height */
  gap: 0;

  @media (max-width: ${(props) => props.$layoutSiftAt || '768px'}) {
    /* For smaller screens */
    grid-template-columns: 100%;
    grid-template-areas: 'mainContent';
  } /* Left, Center, Right */
`;

export const GridMainContentSC = styled.div`
  grid-area: mainContent;
  border-left: ${({ theme }) => `1px solid
      ${theme.colors.independence}20`};
  border-right: ${({ theme }) => `1px solid
      ${theme.colors.independence}20`};
`;

export const GridAsideContentContentSC = styled.div<{ $leftOrRight: string }>`
  grid-area: ${({ $leftOrRight }) => `${$leftOrRight}Aside`};
`;
