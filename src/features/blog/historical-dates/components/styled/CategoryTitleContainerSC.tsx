'use client';
import styled from 'styled-components';

export const CategoryTitleContainerSC = styled.div`
  display: none;
  position: fixed;
  left: 10%;
  bottom: 300px;

  @media (max-width: 768px) {
    display: block;
    bottom: 240px;
  }
  @media (max-height: 768px) {
    display: block;
    bottom: 150px;
    left: 35vw;
  }
`;
