'use client';
import styled from 'styled-components';

export type SlideItemStyleProps = {
  $isActive: boolean;
  $isNext: boolean;
  $isPrev: boolean;
  $height: string;
  $width: string;
  $justify: string;
  $align: string;
  $gap: string;
};
export const SlideItemSC = styled.div<Partial<SlideItemStyleProps>>`
  height: ${({ $height }) => $height || '80%'};
  width: ${({ $width }) => $width || '100%'};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justify }) => $justify || 'start'};
  align-items: ${({ $align }) => $align || 'start'};
  gap: ${({ $gap }) => $gap || '5px'};
  background-color: ${({ theme }) => theme.bg.transparent};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  overflow: hidden;
`;

export const SlideItemTitleSC = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes[24]};
`;

export const SlideItemContentSC = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  color: ${({ theme }) => theme.text.secondary};
`;
