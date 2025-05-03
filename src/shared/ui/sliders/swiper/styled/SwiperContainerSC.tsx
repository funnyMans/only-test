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
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    border-top: 1px solid #cccccc;
    width: 100%;
    height: 270px;
  }

  @media (max-height: 768px) {
    height: 150px;
  }
`;
