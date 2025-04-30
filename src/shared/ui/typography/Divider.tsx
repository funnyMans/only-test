'use client';
import styled from 'styled-components';

type DividerProps = {
  $color?: string;
  $direction?: 'horizontal' | 'vertical';
};

export const DividerSC = styled.div<DividerProps>`
  width: 100%;
  border-top: 1px solid #cccccc;
  margin: 20px 0;
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'vertical' ? 'column' : 'row'};
  color: ${({ $color, theme }) => $color || theme.text.secondary};
`;
