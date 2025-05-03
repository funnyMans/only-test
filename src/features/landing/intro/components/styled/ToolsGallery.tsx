'use client';
import styled from 'styled-components';

export const ToolGallerySC = styled.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr);
  padding: 1rem;
  padding-top: 5rem;
  z-index: 3;
  & > div {
    width: 180px;
    height: 100vh;
  }
`;

export const ToolCardSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.bg.logo};
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ToolNameSC = styled.p`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes[20]};
  font-weight: 700;
  color: ${({ theme }) => theme.text.inverse};
  &:hover,
  &:active {
    color: ${({ theme }) => theme.text.shine};
    scale: 1.05;
  }
`;
