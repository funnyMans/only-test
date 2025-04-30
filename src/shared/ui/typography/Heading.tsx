'use client';
import styled from 'styled-components';

export const HeadingSC = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[56]};
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
`;

export const SubHeadingSC = styled.h2<{ $fontSize?: number }>`
  font-size: ${({ theme, $fontSize }) =>
    theme.fontSizes[
      ($fontSize as unknown as keyof typeof theme.fontSizes) || 24
    ]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.subhead};
  transition: scale 0.3s ease-in-out;
  &:hover,
  &:active {
    scale: 1.05;
  }
`;
