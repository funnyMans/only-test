'use client';
import { PropsWithChildren, useRef } from 'react';
import { useMediaQuery } from 'usehooks-ts';
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
  isVisible = true,
  handler,
}: RotatingDotCircleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const maybeMobileRadius = isMobile ? radius / 2 : radius;
  const maybeMobileSize = isMobile ? size / 2 : size;

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
    <GsapContainerSC $radius={radius} ref={containerRef}>
      <MainCircleWrapper
        radius={maybeMobileRadius}
        items={items}
        size={maybeMobileSize}
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
