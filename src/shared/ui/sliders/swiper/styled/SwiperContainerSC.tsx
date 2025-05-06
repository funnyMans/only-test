'use client';
import styled from 'styled-components';

export const SwiperContainerSC = styled.div`
  position: absolute;
  padding-top: 20px;
  bottom: 10px;
  width: 100%;
  height: 250px;
  & > div {
    height: 100%;
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 1440px) {
    height: 220px;
  }
  @media (max-width: 768px) {
    border-top: 1px solid #cccccc;
    & > div {
      width: 50%;
      margin: 0 auto;
    }
  }

  @media (max-height: 768px) {
    height: 150px;
  }
`;
