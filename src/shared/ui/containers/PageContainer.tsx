'use client';
import styled from 'styled-components';

type PageContainerProps = {
  $direction?: 'row' | 'column';
  $justify?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end';
  $align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  $gap?: string;
  $overflow?: 'hidden' | 'scroll' | 'auto' | 'visible';
  $fullHeight?: boolean;
};

export const PageContainerSC = styled.div<PageContainerProps>`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: ${({ $direction = 'column' }) => $direction};
  justify-content: ${({ $justify = 'flex-start' }) => $justify};
  align-items: ${({ $align = 'stretch' }) => $align};
  gap: ${({ $gap = '1rem' }) => $gap};
  overflow: ${({ $overflow = 'visible' }) => $overflow};
  box-sizing: border-box;
`;
