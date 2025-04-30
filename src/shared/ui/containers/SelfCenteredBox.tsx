'use client';
import styled from 'styled-components';

type BoxProps = {
  $width: string;
  $height: string;
  $flex: number;
  $direction: string;
  $gap: number;
};
export const SelfCenteredBoxSC = styled.div<Partial<BoxProps>>`
  width: ${({ $width }) => ($width ? $width : '100%')};
  height: ${({ $height }) => ($height ? $height : '100%')};
  flex: ${({ $flex }) => ($flex ? $flex : 1)};
  display: flex;
  flex-direction: ${({ $direction }) => ($direction ? $direction : 'column')};
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  gap: ${({ $gap }) => $gap}rem;
`;
