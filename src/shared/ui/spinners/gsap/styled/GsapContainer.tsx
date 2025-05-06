'use client';
import styled from 'styled-components';

type ContainerProps = {
  $radius: number;
};
export const GsapContainerSC = styled.div<ContainerProps>`
  width: ${({ $radius }) => $radius * 2 + 'px'};
  height: ${({ $radius }) => $radius * 2 + 'px'};
  z-index: 1000;

  @media (max-width: 1440px) {
    width: ${({ $radius }) => $radius * 1.5 + 'px'};
    height: ${({ $radius }) => $radius * 1.5 + 'px'};
  }

  @media (max-width: 768px) {
    width: ${({ $radius }) => $radius + 'px'};
    height: ${({ $radius }) => $radius + 'px'};
  }
`;
