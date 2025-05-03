'use client';
import styled from 'styled-components';

type FlexProps = {
  $position: 'relative' | 'absolute' | 'fixed' | 'sticky';
  $padding: string;
  $margin: string;
  $direction: 'row' | 'column';
  $justify:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-end';
  $align: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  $gap: string;
  $wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  $width: string;
  $height: string;
  $fullWidth: boolean;
  $fullHeight: boolean;
  $inline: boolean;
};

export const FlexContainerSC = styled.div<Partial<FlexProps>>`
  position: ${({ $position }) => $position || 'static'};
  padding: ${({ $padding }) => $padding || '0'};
  margin: ${({ $margin }) => $margin || '0'};
  width: ${({ $fullWidth, $width }) =>
    $fullWidth ? '100%' : $width ? $width : 'auto'};
  height: ${({ $fullHeight, $height }) =>
    $fullHeight ? '100%' : $height ? $height : 'auto'};

  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ $direction = 'row' }) => $direction};
  justify-content: ${({ $justify = 'flex-start' }) => $justify};
  align-items: ${({ $align = 'stretch' }) => $align};
  flex-wrap: ${({ $wrap = 'nowrap' }) => $wrap};
  gap: ${({ $gap = '1rem' }) => $gap};
  z-index: 10;
`;
