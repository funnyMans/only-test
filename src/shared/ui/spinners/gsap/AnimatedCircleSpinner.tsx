'use client';

import { PropsWithChildren, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { GsapContainerSC } from './styled/GsapContainer';
import MainCircleWrapper from './MainCircleWrapper';

interface RotatingDotCircleProps extends PropsWithChildren {
  size?: number;
  radius?: number;
  items: string[];
  controls?: boolean;
  withLabel?: boolean;
  isVisible?: boolean;
  handler?: (item: string) => void;
}

const AnimatedCircleSpinnerGSAP = ({
  children,
  radius = 100,
  size = 20,
  items,
  controls,
  withLabel,
  isVisible,
  handler,
}: RotatingDotCircleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(containerRef.current, { autoAlpha: 1 });
    },
    { scope: containerRef }
  );

  const count = items.length;
  if (count < 2 || count > 6) {
    console.warn('RotatingDotCircle: Please provide between 2 and 6 items.');
    return null;
  }

  return (
    <GsapContainerSC
      $radius={radius}
      ref={containerRef}
      className='circle-container'
    >
      <MainCircleWrapper
        radius={radius}
        items={items}
        size={size}
        controls={controls}
        withLabel={withLabel}
        handler={handler}
        isVisible={isVisible}
      >
        {children}
      </MainCircleWrapper>
    </GsapContainerSC>
  );
};

export default AnimatedCircleSpinnerGSAP;
