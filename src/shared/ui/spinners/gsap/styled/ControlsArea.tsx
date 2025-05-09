'use client';
import styled from 'styled-components';

export const ControlsAreaSC = styled.div`
  position: fixed;
  left: 23vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  bottom: 300px;

  @media (max-width: 1440px) {
    bottom: 240px;
  }
  @media (max-width: 768px) {
    left: 10vw;
    bottom: 20px;
  }

  @media (max-height: 768px) {
    bottom: 150px;
  }
`;

export const ControlsWrapperSC = styled.div`
  display: flex;
  gap: 20px;
`;
