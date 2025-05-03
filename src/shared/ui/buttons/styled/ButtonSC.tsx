'use client';
import styled from 'styled-components';

export const ButtonSC = styled.button`
  width: fit-content;
  height: fit-content;
  min-width: 48px;
  min-height: 32px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.text.primary};
  color: ${({ theme }) => theme.text.inverse};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes[20]};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.bg.vice};
    color: ${({ theme }) => theme.text.primary};
  }
  &:active {
    background-color: ${({ theme }) => theme.bg.inset};
    color: ${({ theme }) => theme.text.tertiary};
  }
`;
